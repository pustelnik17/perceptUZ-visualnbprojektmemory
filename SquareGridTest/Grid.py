from psychopy import visual, core, event, data, gui
import numpy as np

class Grid():
    def __init__(self, win, nCols=3, nRows=3, cellSize=0.3, cellImage=''):
        x_positions = [-0.6 + col * cellSize * 2 for _ in range(nRows) for col in range(nCols)]
        y_positions = [0.6 - row * cellSize * 2 for row in range(nRows) for _ in range(nCols)]

        positions = np.column_stack([x_positions, y_positions])

        self.gridCells = visual.ElementArrayStim(
            win=win,
            units='norm',
            nElements=nRows * nCols,
            sizes=cellSize,
            xys=positions,
            elementTex=None,
            elementMask=cellImage,
            colors=[0.5, 0.5, 0.5]
        )

        self.gridBorders = visual.ElementArrayStim(
            win=win,
            units='norm',
            nElements=nRows * nCols,
            sizes=cellSize * 1.02,
            xys=positions,
            elementTex=None,
            elementMask=cellImage,
            colors=[-1, -1, -1]
        )

    def draw(self):
        self.gridBorders.draw()
        self.gridCells.draw()
