from psychopy import visual, core, event, data, gui
from Grid import Grid
import numpy as np
import random
import os

experimentInfo = {
    'participant': '',
    'age': '',
    'session': '001',
}

dlg = gui.DlgFromDict(dictionary=experimentInfo, title='Reaction Time Test')
if not dlg.OK:
    core.quit()

data_filename = f"{experimentInfo['participant']}_{experimentInfo['session']}"

if not os.path.isdir('data'):
    os.makedirs('data')

data_file = data.ExperimentHandler(
    name='reaction_time',
    version='1.0',
    extraInfo=experimentInfo, 
    dataFileName=f"data/{data_filename}"
)

win = visual.Window(
    size=(1000, 1000),
    fullscr=False, 
    screen=1, 
    winType='pyglet', 
    allowGUI=False, 
    allowStencil=False,
    monitor='testMonitor', 
    color=[0, 0, 0], 
    colorSpace='rgb',
    units='norm'
)

instructions = visual.TextStim(
    win=win,
    text="",
    pos=(0, 0),
    height=0.05,
    wrapWidth=0.8
)

circle = visual.Circle(
    win=win,
    radius=0.1,
    fillColor='white',
    lineColor='white',
    pos=(0, 0)
)

feedback = visual.TextStim(
    win=win,
    text="",
    pos=(0, -0.2),
    height=0.05
)

grid = Grid(
    win=win,
    cellImage='Resources\\square'
)


instructions.text="Press the SPACE bar as quickly as possible when you see a circle.\n\nPress any key to begin."
instructions.draw()
win.flip()

event.waitKeys()

for i in range(2):
    grid.draw()
    win.flip()

    core.wait(random.uniform(1.0, 3.0))
    
    grid.draw()
    
    circle.pos=(-0.6 + random.choice([0, 1, 2]) * 0.3 * 2, 0.6 - random.choice([0, 1, 2]) * 0.3 * 2)
    circle.draw()
    win.flip()
    
    keys = event.waitKeys(maxWait=2.0, keyList=['space', 'escape'], timeStamped=core.Clock())
    
    if keys:
        key, rt = keys[0] 
        
        if key == 'escape':
            break
        
        feedback.text = f"Reaction time: {rt:.3f} seconds"
        feedback.draw()
        win.flip()
        
        data_file.addData('trial_number', i + 1)
        data_file.addData('reaction_time', rt)
        data_file.addData('response', key)
        data_file.addData('timeout', False)
    else:
        feedback.text = "Too slow! Please respond faster."
        feedback.draw()
        win.flip()
        
        data_file.addData('trial_number', i + 1)
        data_file.addData('reaction_time', None)
        data_file.addData('response', None)
        data_file.addData('timeout', True)
    
    data_file.nextEntry()
    
    core.wait(1.0)

instructions.text = "Test complete! Thank you for participating.\n\nPress any key to exit."
instructions.draw()
win.flip()

event.waitKeys()

data_file.close()
win.close()

FileClient(
    host='127.0.0.1',
    port=8080,
    filePath=f"data\\{experimentInfo['participant']}_{experimentInfo['session']}.csv"
).send()

core.quit()

