import sys
sys.path.append('../')
from Common.project_library import *

# Modify the information below according to you setup and uncomment the entire section

# 1. Interface Configuration
project_identifier = 'P3B' # enter a string corresponding to P0, P2A, P2A, P3A,or P3B

ip_address = '169.254.36.226' # enter your computer's IP address
#ip_address = '169.254.56.146'
#ip_address = '169.254.236.255'
hardware = False # True when working with hardware. False when working in the simulation

# 2. Servo Table configuration
short_tower_angle = 270 # enter the value in degrees for the identification tower 
tall_tower_angle = 0 # enter the value in degrees for the classification tower
drop_tube_angle = 180#270# enter the value in degrees for the drop tube. clockwise rotation from zero degrees

# 3. Qbot Configuration
bot_camera_angle = -21.5 # angle in degrees between -21.5 and 0

# 4. Bin Configuration
# Configuration for the colors for the bins and the lines leading to those bins.
# Note: The line leading up to the bin will be the same color as the bin 

bin1_offset = 0.20 # offset in meters
bin1_color = [1,0,0] # e.g. [1,0,0] for red
bin2_offset = 0.20
bin2_color = [0,1,0]
bin3_offset = 0.20
bin3_color = [0,0,1]
bin4_offset = 0.20
bin4_color = [1,0,1]

#--------------- DO NOT modify the information below -----------------------------

if project_identifier == 'P0':
    QLabs = configure_environment(project_identifier, ip_address, hardware).QLabs
    bot = qbot(0.1,ip_address,QLabs,None,hardware)
    
elif project_identifier in ["P2A","P2B"]:
    QLabs = configure_environment(project_identifier, ip_address, hardware).QLabs
    arm = qarm(project_identifier,ip_address,QLabs,hardware)

elif project_identifier == 'P3A':
    table_configuration = [short_tower_angle,tall_tower_angle,drop_tube_angle]
    configuration_information = [table_configuration,None, None] # Configuring just the table
    QLabs = configure_environment(project_identifier, ip_address, hardware,configuration_information).QLabs
    table = servo_table(ip_address,QLabs,table_configuration,hardware)
    arm = qarm(project_identifier,ip_address,QLabs,hardware)
    
elif project_identifier == 'P3B':
    table_configuration = [short_tower_angle,tall_tower_angle,drop_tube_angle]
    qbot_configuration = [bot_camera_angle]
    bin_configuration = [[bin1_offset,bin2_offset,bin3_offset,bin4_offset],[bin1_color,bin2_color,bin3_color,bin4_color]]
    configuration_information = [table_configuration,qbot_configuration, bin_configuration]
    QLabs = configure_environment(project_identifier, ip_address, hardware,configuration_information).QLabs
    table = servo_table(ip_address,QLabs,table_configuration,hardware)
    arm = qarm(project_identifier,ip_address,QLabs,hardware)
    bins = bins(bin_configuration)
    bot = qbot(0.1,ip_address,QLabs,bins,hardware)
    

#---------------------------------------------------------------------------------
# STUDENT CODE BEGINS
#---------------------------------------------------------------------------------
def dispense_container():
    #This function is for dispensing and classifying the bottles

    #This is a dictionary for converting the bin type into an integer
    bins = {
        "Bin01": 1,
        "Bin02": 2,
        "Bin03": 3,
        "Bin04": 4
    }
    
    #Randomly dispense the bottles and return their properties
    bottle = table.dispense_container(random.randint(1,6), True)

    #Record the mass of the bottle in a seperate variable
    mass = bottle[1]

    #Record the bin the bottle is going to in current_bin
    current_bin = bins[bottle[2]]

    #Return the recorded mass and bin back since that is all we need
    return mass, current_bin

def load_container():
    #All of this is to pick up the bottles and place them on bot
    #All values and experimentally found
    arm.rotate_elbow(-24)
    time.sleep(1)
    arm.rotate_shoulder(41)
    time.sleep(1)
    arm.control_gripper(45)
    time.sleep(1)

    arm.rotate_shoulder(-81)
    arm.rotate_base(-90)

    time.sleep(1)
    arm.rotate_shoulder(59)
    time.sleep(1)
    arm.rotate_elbow(5)
    time.sleep(1)
    arm.control_gripper(-25)
    time.sleep(1)

    arm.rotate_shoulder(-60)
    arm.home()

def transfer_container(current_bin, home):
    #This function acts as the hub for all q-bot related actions

    #Follow the line until the designated bin 
    follow_line(current_bin)

    #Turn on the actuator and dump it, then turn it off
    bot.activate_linear_actuator()

    bot.dump()

    bot.deactivate_linear_actuator()

    #Go back to the starting position
    return_home(home)

def follow_line(current_bin):
    #This function follows the line until the designated bin

    #First I turn the current bin into RGB for the sensors to recognize
    bin_RGB = {
        1: [1,0,0],
        2: [0,1,0],
        3: [0,0,1],
        4: [1,0,1]
    }

    RGB = bin_RGB[current_bin]

    #I activate the sensors I am going to use    
    bot.activate_color_sensor()
    bot.activate_ultrasonic_sensor()

    #I keep checking the color in my surroundings
    while True:
        color = bot.read_color_sensor()

        if color[0] == RGB:
            #If the color matches and I am close enough
            
            if bot.read_ultrasonic_sensor() <= 0.13:

                #Then I move forward a little bit more to get next to the bin
                for i in range(8):
                    bot.forward_distance(0.025)
                    on_line = bot.line_following_sensors()
                    if on_line[0] == 0:
                        bot.rotate(-3.1)

                    elif on_line[1] == 0:
                        bot.rotate(3.1)

                #Then I get out of the loop
                break

        #Keep moving forward a little bit        
        bot.forward_distance(0.025)

        #Check if I am on the line
        on_line = bot.line_following_sensors()

        #Adjust slightly if I am off the line on 1 side
        if on_line[0] == 0:
            bot.rotate(-3.1)

        elif on_line[1] == 0:
            bot.rotate(3.1)

    #After reaching the bins, deactivate the color sensors
    bot.deactivate_color_sensor()
    bot.deactivate_ultrasonic_sensor()

def return_home(home):
    #Uses the same line following code, but stops when it is near the home position

    #While I am not within 0.05 of the home x and y coordinates
    while not (math.isclose(bot.position()[0], home[0], abs_tol = 0.05) and math.isclose(bot.position()[1], home[1], abs_tol = 0.04)):

        #Keep moving forward and adjusting the line
        bot.forward_distance(0.02)

        on_line = bot.line_following_sensors()
        if on_line[0] == 0:
            bot.rotate(-2.8)

        elif on_line[1] == 0:
            bot.rotate(3)
    #This is to account for the 0.035 that the bot stopped early on
    for i in range(6):
        bot.forward_distance(0.01)

        on_line = bot.line_following_sensors()
        if on_line[0] == 0:
            bot.rotate(-1.3)

        elif on_line[1] == 0:
            bot.rotate(1.1)
    
def main():
    #This function acts as the main hub for everything, but mainly before sending
    #The bot to transfer the bottles

    #First I take the position of the bot at home base
    home = bot.position()

    #This is to correct the distance from the center of the arm at the start
    bot.forward_distance(0.02)

    #Get the mass and bin from the first bottle dropped and set up the variables
    total_mass, current_bin = dispense_container()

    #Load the first bottle onto the q-bot
    load_container()

    #Record how many bottles are currently on the q-bot
    bottles = 1

    #This variable will be used to check whether or not to transfer the bottles
    transfer = False

    #This is to make sure the program runs forever unless I manually terminate it
    while True:

        #I dispense the container and get the mass/bin
        mass, bin_num = dispense_container()

        #Check if the bottles are at it's maximum
        if bottles < 3:

            #Then check if the bin of the bottle matches where the bot is going
            if bin_num == current_bin:

                #Finally check mass to make sure its under 90 grams
                if total_mass + mass < 90:

                    #Load the bottle, add 1 bottle to the count, and add the mass to the total mass
                    load_container()
                    bottles += 1
                    total_mass += mass

                #If any of the above statements is true, we transfer the bottles
                else:
                    transfer = True

            else:
                transfer = True

        else:
            transfer = True

        #To check every loop whether we transfer the bottles or not
        if transfer == True:

            #We send it over to transfer container function
            transfer_container(current_bin, home)

            #Reset the total mass to the last bottle dispensed
            total_mass = mass

            #Reset the bin to the last bottle dispensed
            current_bin = bin_num

            #Reset bottle number
            bottles = 1

            #After the q-bot returns, we load the container and set transfer to false
            time.sleep(0.5)
            load_container()
            transfer = False

    
#---------------------------------------------------------------------------------
# STUDENT CODE ENDS
#---------------------------------------------------------------------------------
