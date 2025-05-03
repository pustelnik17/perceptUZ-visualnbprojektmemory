from psychopy import visual, core, event, data, gui
from Grid import Grid
import numpy as np
import random
import os
import requests
import pandas as pd

experimentInfo = {
    'participant': '',
    'age': '',
    'n-back': 3,
    'session': '001'
}

dlg = gui.DlgFromDict(dictionary=experimentInfo, title='Reaction Time Test')
if not dlg.OK:
    core.quit()

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
    cellImage='resources\\square.jpg'
)

trialNumber = []
reactionTime = []
reactionKey = []
expectedKey = []

instructions.text="Press the SPACE bar as quickly as possible when you see a circle.\n\nPress any key to begin."
instructions.draw()
win.flip()

event.waitKeys()

NUMBER_OF_TRIALS = 10
positions = [(-0.6 + random.choice([0, 1, 2]) * 0.3 * 2, 0.6 - random.choice([0, 1, 2]) * 0.3 * 2) for _ in range(NUMBER_OF_TRIALS)]
nbackTrue = [1 if positions[i] in positions[max(i-experimentInfo['n-back'], 0):i:] else 0 for i in range(NUMBER_OF_TRIALS)]

print(positions)
print(nbackTrue)

for i in range(NUMBER_OF_TRIALS):
    grid.draw()
    win.flip()

    core.wait(random.uniform(1.0, 3.0))
    
    grid.draw()
    
    circle.pos=(positions[i])
    circle.draw()
    win.flip()
    
    keys = event.waitKeys(maxWait=2.0, keyList=['space', 'escape'], timeStamped=core.Clock())
    
    trialNumber.append(i+1)
    if keys:
        key, rt = keys[0] 
        
        
        reactionTime.append(rt)
        reactionKey.append(key)
        expectedKey.append('space' if nbackTrue[i] else None)

        if key == 'escape':
            break
    else:
        reactionTime.append(None)
        reactionKey.append(None)
        expectedKey.append('space' if nbackTrue[i] else None)
    
    core.wait(1.0)

instructions.text = "Test complete! Thank you for participating.\n\nPress any key to exit."
instructions.draw()
win.flip()

event.waitKeys()

win.close()

response = requests.post(
    "http://127.0.0.1:5000/api/results",
    json={
        "name": f"{experimentInfo['participant']}_{experimentInfo['age']}_{experimentInfo['session']}",
        "payload": pd.DataFrame([trialNumber, reactionTime, reactionKey, expectedKey]).to_json()
    }
)
print(response.text)
core.quit()
