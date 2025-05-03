/********************* 
 * N-Back_Taskv *
 *********************/


// store info about the experiment session:
let expName = 'N-back_taskV';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(FixationRoutineBegin());
flowScheduler.add(FixationRoutineEachFrame());
flowScheduler.add(FixationRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(przejscieRoutineBegin());
flowScheduler.add(przejscieRoutineEachFrame());
flowScheduler.add(przejscieRoutineEnd());
flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
flowScheduler.add(FixationRoutineBegin());
flowScheduler.add(FixationRoutineEachFrame());
flowScheduler.add(FixationRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(podsumowanieRoutineBegin());
flowScheduler.add(podsumowanieRoutineEachFrame());
flowScheduler.add(podsumowanieRoutineEnd());
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'N-back-1.xlsx', 'path': 'N-back-1.xlsx'},
    {'name': 'N-back-2.xlsx', 'path': 'N-back-2.xlsx'},
    {'name': 'grid.png', 'path': 'grid.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var text_2;
var key_resp;
var hits_nback1;
var misses_nback1;
var false_alarms_nback1;
var correct_rejections_nback1;
var reaction_times_nback1;
var hits_nback2;
var misses_nback2;
var false_alarms_nback2;
var correct_rejections_nback2;
var reaction_times_nback2;
var FixationClock;
var fixation_1;
var N_back_1_TrialClock;
var grid_lines;
var target_square;
var fixation_2;
var response;
var przejscieClock;
var przejscie_2;
var key_resp_3;
var Instructions_2Clock;
var instructions_2;
var key_resp_2;
var N_back_2_trialsClock;
var grid_lines_2;
var target_square_2;
var fixation_3;
var response_2;
var podsumowanieClock;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Za chwilę weźmiesz udział w zadaniu składającym się z dwóch części.\nW pierwszej części będziesz obserwować kwadrat pojawiający się w różnych miejscach na ekranie.\nTwoim zadaniem jest naciśnięcie spacji, jeśli kwadrat pojawi się w tym samym miejscu co w poprzedniej próbie.\nPrzykład: \n- Jeśli w pierwszej próbie kwadrat znajdował się w lewym dolnym rogu, \n- a w drugiej próbie pojawił się dokładnie w tym samym miejscu, naciśnij spację. \n- Jeśli miejsce jest inne – nie naciskaj żadnego klawisza.\n\nNaciśnij spację, aby rozpocząć zadanie.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  hits_nback1 = 0;
  misses_nback1 = 0;
  false_alarms_nback1 = 0;
  correct_rejections_nback1 = 0;
  reaction_times_nback1 = [];
  hits_nback2 = 0;
  misses_nback2 = 0;
  false_alarms_nback2 = 0;
  correct_rejections_nback2 = 0;
  reaction_times_nback2 = [];
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  fixation_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "N_back_1_Trial"
  N_back_1_TrialClock = new util.Clock();
  grid_lines = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_lines', units : undefined, 
    image : 'grid.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  target_square = new visual.Rect ({
    win: psychoJS.window, name: 'target_square', 
    width: [0.15, 0.15][0], height: [0.15, 0.15][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: undefined, 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  fixation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "przejscie"
  przejscieClock = new util.Clock();
  przejscie_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'przejscie_2',
    text: 'To koniec części pierwszej. \nTeraz przejdziesz do drugiej części zadania. \nGdy będziesz gotowy naciśnij spację.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_2',
    text: 'W tej części zadania zasady pozostają podobne do poprzedniej.\nTym razem jednak naciśnij spację, jeśli kwadrat pojawi się w tym samym miejscu co dwie próby wcześniej, zamiast jednej próby wcześniej.\nPrzykład: \n- Jeśli kwadrat w próbie 1 znajdował się w lewym dolnym rogu,\n- a w próbie 3 pojawił się tam ponownie, naciśnij spację.\n- Jeśli miejsce jest inne – nie naciskaj żadnego klawisza.\n\nNaciśnij spację, aby rozpocząć zadanie.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "N_back_2_trials"
  N_back_2_trialsClock = new util.Clock();
  grid_lines_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_lines_2', units : undefined, 
    image : 'grid.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  target_square_2 = new visual.Rect ({
    win: psychoJS.window, name: 'target_square_2', 
    width: [0.15, 0.15][0], height: [0.15, 0.15][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: undefined, 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  fixation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "podsumowanie"
  podsumowanieClock = new util.Clock();
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'To koniec zadania.\nDziękujemy za udział.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InstructionsMaxDurationReached;
var _key_resp_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text_2);
    InstructionsComponents.push(key_resp);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FixationClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(fixation_1);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_1* updates
    if (t >= 0.0 && fixation_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_1.tStart = t;  // (not accounting for frame time here)
      fixation_1.frameNStart = frameN;  // exact frame index
      
      fixation_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    if (FixationMaxDurationReached) {
        FixationClock.add(FixationMaxDuration);
    } else {
        FixationClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'N-back-1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(N_back_1_TrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(N_back_1_TrialRoutineEachFrame());
      trialsLoopScheduler.add(N_back_1_TrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'N-back-2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(N_back_2_trialsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(N_back_2_trialsRoutineEachFrame());
      trials_2LoopScheduler.add(N_back_2_trialsRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var N_back_1_TrialMaxDurationReached;
var _response_allKeys;
var N_back_1_TrialMaxDuration;
var N_back_1_TrialComponents;
function N_back_1_TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'N_back_1_Trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    N_back_1_TrialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    N_back_1_TrialMaxDurationReached = false;
    // update component parameters for each repeat
    target_square.setPos(nback_position);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('N_back_1_Trial.started', globalClock.getTime());
    N_back_1_TrialMaxDuration = null
    // keep track of which components have finished
    N_back_1_TrialComponents = [];
    N_back_1_TrialComponents.push(grid_lines);
    N_back_1_TrialComponents.push(target_square);
    N_back_1_TrialComponents.push(fixation_2);
    N_back_1_TrialComponents.push(response);
    
    N_back_1_TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function N_back_1_TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'N_back_1_Trial' ---
    // get current time
    t = N_back_1_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grid_lines* updates
    if (t >= 0 && grid_lines.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_lines.tStart = t;  // (not accounting for frame time here)
      grid_lines.frameNStart = frameN;  // exact frame index
      
      grid_lines.setAutoDraw(true);
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_lines.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid_lines.setAutoDraw(false);
    }
    
    
    // *target_square* updates
    if (t >= 0 && target_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_square.tStart = t;  // (not accounting for frame time here)
      target_square.frameNStart = frameN;  // exact frame index
      
      target_square.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_square.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_square.setAutoDraw(false);
    }
    
    
    // *fixation_2* updates
    if (t >= 1 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }
    
    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
        }
      
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['space'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    N_back_1_TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var is_target;
function N_back_1_TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'N_back_1_Trial' ---
    N_back_1_TrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('N_back_1_Trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        }
    
    response.stop();
    // Run 'End Routine' code from code_2
    is_target = (corrAns !== null);
    if ((is_target && response.keys)) {
        if ((response.corr === 1)) {
            hits_nback1 += 1;
            reaction_times_nback1.push(response.rt);
        }
    } else {
        if ((is_target && (! response.keys))) {
            misses_nback1 += 1;
        } else {
            if (((! is_target) && response.keys)) {
                false_alarms_nback1 += 1;
            } else {
                if (((! is_target) && (! response.keys))) {
                    correct_rejections_nback1 += 1;
                }
            }
        }
    }
    
    if (N_back_1_TrialMaxDurationReached) {
        N_back_1_TrialClock.add(N_back_1_TrialMaxDuration);
    } else {
        N_back_1_TrialClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var przejscieMaxDurationReached;
var _key_resp_3_allKeys;
var przejscieMaxDuration;
var przejscieComponents;
function przejscieRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'przejscie' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    przejscieClock.reset();
    routineTimer.reset();
    przejscieMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('przejscie.started', globalClock.getTime());
    przejscieMaxDuration = null
    // keep track of which components have finished
    przejscieComponents = [];
    przejscieComponents.push(przejscie_2);
    przejscieComponents.push(key_resp_3);
    
    przejscieComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function przejscieRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'przejscie' ---
    // get current time
    t = przejscieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *przejscie_2* updates
    if (t >= 0.0 && przejscie_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      przejscie_2.tStart = t;  // (not accounting for frame time here)
      przejscie_2.frameNStart = frameN;  // exact frame index
      
      przejscie_2.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    przejscieComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function przejscieRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'przejscie' ---
    przejscieComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('przejscie.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "przejscie" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions_2MaxDurationReached;
var _key_resp_2_allKeys;
var Instructions_2MaxDuration;
var Instructions_2Components;
function Instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instructions_2Clock.reset();
    routineTimer.reset();
    Instructions_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Instructions_2.started', globalClock.getTime());
    Instructions_2MaxDuration = null
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(instructions_2);
    Instructions_2Components.push(key_resp_2);
    
    Instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_2' ---
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_2* updates
    if (t >= 0.0 && instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_2.tStart = t;  // (not accounting for frame time here)
      instructions_2.frameNStart = frameN;  // exact frame index
      
      instructions_2.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_2' ---
    Instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var N_back_2_trialsMaxDurationReached;
var _response_2_allKeys;
var N_back_2_trialsMaxDuration;
var N_back_2_trialsComponents;
function N_back_2_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'N_back_2_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    N_back_2_trialsClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    N_back_2_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    target_square_2.setPos(nback_position);
    response_2.keys = undefined;
    response_2.rt = undefined;
    _response_2_allKeys = [];
    psychoJS.experiment.addData('N_back_2_trials.started', globalClock.getTime());
    N_back_2_trialsMaxDuration = null
    // keep track of which components have finished
    N_back_2_trialsComponents = [];
    N_back_2_trialsComponents.push(grid_lines_2);
    N_back_2_trialsComponents.push(target_square_2);
    N_back_2_trialsComponents.push(fixation_3);
    N_back_2_trialsComponents.push(response_2);
    
    N_back_2_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function N_back_2_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'N_back_2_trials' ---
    // get current time
    t = N_back_2_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *grid_lines_2* updates
    if (t >= 0.0 && grid_lines_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_lines_2.tStart = t;  // (not accounting for frame time here)
      grid_lines_2.frameNStart = frameN;  // exact frame index
      
      grid_lines_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_lines_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid_lines_2.setAutoDraw(false);
    }
    
    
    // *target_square_2* updates
    if (t >= 0 && target_square_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_square_2.tStart = t;  // (not accounting for frame time here)
      target_square_2.frameNStart = frameN;  // exact frame index
      
      target_square_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_square_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_square_2.setAutoDraw(false);
    }
    
    
    // *fixation_3* updates
    if (t >= 1 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
    }
    
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_3.setAutoDraw(false);
    }
    
    
    // *response_2* updates
    if (t >= 0.0 && response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_2.tStart = t;  // (not accounting for frame time here)
      response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_2.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_2.getKeys({keyList: ['space'], waitRelease: false});
      _response_2_allKeys = _response_2_allKeys.concat(theseKeys);
      if (_response_2_allKeys.length > 0) {
        response_2.keys = _response_2_allKeys[_response_2_allKeys.length - 1].name;  // just the last key pressed
        response_2.rt = _response_2_allKeys[_response_2_allKeys.length - 1].rt;
        response_2.duration = _response_2_allKeys[_response_2_allKeys.length - 1].duration;
        // was this correct?
        if (response_2.keys == corrAns) {
            response_2.corr = 1;
        } else {
            response_2.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    N_back_2_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function N_back_2_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'N_back_2_trials' ---
    N_back_2_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('N_back_2_trials.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_2.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response_2.corr = 1;  // correct non-response
      } else {
         response_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_2.corr, level);
    }
    psychoJS.experiment.addData('response_2.keys', response_2.keys);
    psychoJS.experiment.addData('response_2.corr', response_2.corr);
    if (typeof response_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_2.rt', response_2.rt);
        psychoJS.experiment.addData('response_2.duration', response_2.duration);
        }
    
    response_2.stop();
    // Run 'End Routine' code from code_3
    is_target = (corrAns !== null);
    if ((is_target && response_2.keys)) {
        if ((response_2.corr === 1)) {
            hits_nback2 += 1;
            reaction_times_nback2.push(response_2.rt);
        }
    } else {
        if ((is_target && (! response_2.keys))) {
            misses_nback2 += 1;
        } else {
            if (((! is_target) && response_2.keys)) {
                false_alarms_nback2 += 1;
            } else {
                if (((! is_target) && (! response_2.keys))) {
                    correct_rejections_nback2 += 1;
                }
            }
        }
    }
    
    if (N_back_2_trialsMaxDurationReached) {
        N_back_2_trialsClock.add(N_back_2_trialsMaxDuration);
    } else {
        N_back_2_trialsClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var podsumowanieMaxDurationReached;
var total_targets_nback1;
var total_distractors_nback1;
var accuracy_nback1;
var mean_rt_nback1;
var total_targets_nback2;
var total_distractors_nback2;
var accuracy_nback2;
var mean_rt_nback2;
var hits_total;
var misses_total;
var false_alarms_total;
var correct_rejections_total;
var total_targets_total;
var total_distractors_total;
var accuracy_total;
var reaction_times_total;
var mean_rt_total;
var podsumowanieMaxDuration;
var podsumowanieComponents;
function podsumowanieRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'podsumowanie' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    podsumowanieClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    podsumowanieMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    // N-back 1
    total_targets_nback1 = hits_nback1 + misses_nback1;
    total_distractors_nback1 = false_alarms_nback1 + correct_rejections_nback1;
    
    accuracy_nback1 = ((hits_nback1 + correct_rejections_nback1) /
                       (total_targets_nback1 + total_distractors_nback1)) * 100;
    
    mean_rt_nback1 = reaction_times_nback1.length > 0 ? (reaction_times_nback1.reduce((a,b) => a+b) / reaction_times_nback1.length) : "NA";
    
    // N-back 2
    total_targets_nback2 = hits_nback2 + misses_nback2;
    total_distractors_nback2 = false_alarms_nback2 + correct_rejections_nback2;
    
    accuracy_nback2 = ((hits_nback2 + correct_rejections_nback2) /
                       (total_targets_nback2 + total_distractors_nback2)) * 100;
    
    mean_rt_nback2 = reaction_times_nback2.length > 0 ? (reaction_times_nback2.reduce((a,b) => a+b) / reaction_times_nback2.length) : "NA";
    
    // Razem
    hits_total = hits_nback1 + hits_nback2;
    misses_total = misses_nback1 + misses_nback2;
    false_alarms_total = false_alarms_nback1 + false_alarms_nback2;
    correct_rejections_total = correct_rejections_nback1 + correct_rejections_nback2;
    
    total_targets_total = hits_total + misses_total;
    total_distractors_total = false_alarms_total + correct_rejections_total;
    
    accuracy_total = ((hits_total + correct_rejections_total) /
                      (total_targets_total + total_distractors_total)) * 100;
    
    reaction_times_total = reaction_times_nback1.concat(reaction_times_nback2);
    mean_rt_total = reaction_times_total.length > 0 ? (reaction_times_total.reduce((a,b) => a+b) / reaction_times_total.length) : "NA";
    
    // ZAPIS DANYCH DO Pavlovii:
    psychoJS.experiment.addData('hits_nback1', hits_nback1);
    psychoJS.experiment.addData('misses_nback1', misses_nback1);
    psychoJS.experiment.addData('false_alarms_nback1', false_alarms_nback1);
    psychoJS.experiment.addData('correct_rejections_nback1', correct_rejections_nback1);
    psychoJS.experiment.addData('accuracy_nback1', accuracy_nback1);
    psychoJS.experiment.addData('mean_rt_nback1', mean_rt_nback1);
    
    psychoJS.experiment.addData('hits_nback2', hits_nback2);
    psychoJS.experiment.addData('misses_nback2', misses_nback2);
    psychoJS.experiment.addData('false_alarms_nback2', false_alarms_nback2);
    psychoJS.experiment.addData('correct_rejections_nback2', correct_rejections_nback2);
    psychoJS.experiment.addData('accuracy_nback2', accuracy_nback2);
    psychoJS.experiment.addData('mean_rt_nback2', mean_rt_nback2);
    
    psychoJS.experiment.addData('hits_total', hits_total);
    psychoJS.experiment.addData('misses_total', misses_total);
    psychoJS.experiment.addData('false_alarms_total', false_alarms_total);
    psychoJS.experiment.addData('correct_rejections_total', correct_rejections_total);
    psychoJS.experiment.addData('accuracy_total', accuracy_total);
    psychoJS.experiment.addData('mean_rt_total', mean_rt_total);
    
    psychoJS.experiment.addData('podsumowanie.started', globalClock.getTime());
    podsumowanieMaxDuration = 0.5
    // keep track of which components have finished
    podsumowanieComponents = [];
    
    podsumowanieComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function podsumowanieRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'podsumowanie' ---
    // get current time
    t = podsumowanieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > podsumowanieMaxDuration) {
        podsumowanieMaxDurationReached = true
        continueRoutine = false
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    podsumowanieComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function podsumowanieRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'podsumowanie' ---
    podsumowanieComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('podsumowanie.stopped', globalClock.getTime());
    if (podsumowanieMaxDurationReached) {
        podsumowanieClock.add(podsumowanieMaxDuration);
    } else {
        podsumowanieClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thank_you.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thank_you.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'EDuQRfBXXb8H',  
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    });
    // N-back 1
    total_targets_nback1 = hits_nback1 + misses_nback1;
    total_distractors_nback1 = false_alarms_nback1 + correct_rejections_nback1;
    
    accuracy_nback1 = ((hits_nback1 + correct_rejections_nback1) /
                       (total_targets_nback1 + total_distractors_nback1)) * 100;
    
    mean_rt_nback1 = reaction_times_nback1.length > 0 ? (reaction_times_nback1.reduce((a,b) => a+b) / reaction_times_nback1.length) : "NA";
    
    // N-back 2
    total_targets_nback2 = hits_nback2 + misses_nback2;
    total_distractors_nback2 = false_alarms_nback2 + correct_rejections_nback2;
    
    accuracy_nback2 = ((hits_nback2 + correct_rejections_nback2) /
                       (total_targets_nback2 + total_distractors_nback2)) * 100;
    
    mean_rt_nback2 = reaction_times_nback2.length > 0 ? (reaction_times_nback2.reduce((a,b) => a+b) / reaction_times_nback2.length) : "NA";
    
    // Razem
    hits_total = hits_nback1 + hits_nback2;
    misses_total = misses_nback1 + misses_nback2;
    false_alarms_total = false_alarms_nback1 + false_alarms_nback2;
    correct_rejections_total = correct_rejections_nback1 + correct_rejections_nback2;
    
    total_targets_total = hits_total + misses_total;
    total_distractors_total = false_alarms_total + correct_rejections_total;
    
    accuracy_total = ((hits_total + correct_rejections_total) /
                      (total_targets_total + total_distractors_total)) * 100;
    
    reaction_times_total = reaction_times_nback1.concat(reaction_times_nback2);
    mean_rt_total = reaction_times_total.length > 0 ? (reaction_times_total.reduce((a,b) => a+b) / reaction_times_total.length) : "NA";
    
    // ZAPIS DANYCH DO Pavlovii:
    psychoJS.experiment.addData('hits_nback1', hits_nback1);
    psychoJS.experiment.addData('misses_nback1', misses_nback1);
    psychoJS.experiment.addData('false_alarms_nback1', false_alarms_nback1);
    psychoJS.experiment.addData('correct_rejections_nback1', correct_rejections_nback1);
    psychoJS.experiment.addData('accuracy_nback1', accuracy_nback1);
    psychoJS.experiment.addData('mean_rt_nback1', mean_rt_nback1);
    
    psychoJS.experiment.addData('hits_nback2', hits_nback2);
    psychoJS.experiment.addData('misses_nback2', misses_nback2);
    psychoJS.experiment.addData('false_alarms_nback2', false_alarms_nback2);
    psychoJS.experiment.addData('correct_rejections_nback2', correct_rejections_nback2);
    psychoJS.experiment.addData('accuracy_nback2', accuracy_nback2);
    psychoJS.experiment.addData('mean_rt_nback2', mean_rt_nback2);
    
    psychoJS.experiment.addData('hits_total', hits_total);
    psychoJS.experiment.addData('misses_total', misses_total);
    psychoJS.experiment.addData('false_alarms_total', false_alarms_total);
    psychoJS.experiment.addData('correct_rejections_total', correct_rejections_total);
    psychoJS.experiment.addData('accuracy_total', accuracy_total);
    psychoJS.experiment.addData('mean_rt_total', mean_rt_total);
    
    if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
