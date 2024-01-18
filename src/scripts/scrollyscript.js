import scrollama from 'scrollama';
/**
 * Resizer script to toggle multiple artboards for responsiveness. Adapted from:
 * https://github.com/newsdev/ai2html/blob/gh-pages/_includes/resizer-script.html
 */
import { select, selectAll } from 'd3-selection';
// etc.

const d3 = { select, selectAll };
//
// using d3 for convenience
var main = d3.select('main');
var scrolly = main.select('#scrolly');
var sticky = scrolly.select('#sticky-thing');
var article = scrolly.select('article');
var step = article.selectAll('.step');

// initialize the scrollama
var scroller = scrollama();

function handleStepEnter(response) {
  //unfade();
  step.classed('is-active', function (d, i) {
    return i === response.index;
  });
  stepFunctions[response.index]();
  sticky.attr('class', 'step-' + response.index);
}

function handleStepExit(response) {
  if (response.index == 0 && response.direction == 'up') {
    sticky.attr('class', 'none');
  }
}

function setup() {
  d3.selectAll("[data-name='Attendance_2017']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2017']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2017']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2017']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2017']").classed('quarter_opacity', true);
  // this should be done for all Attendance_ 2018, 2019, 2021, 2022, 2023
  d3.selectAll("[data-name='Attendance_2018']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2018']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2018']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2018']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2018']").classed('quarter_opacity', true);

  d3.selectAll("[data-name='Attendance_2019']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2019']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2019']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2019']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2019']").classed('quarter_opacity', true);

  d3.selectAll("[data-name='Attendance_2021']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2021']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2021']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2021']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2021']").classed('quarter_opacity', true);

  d3.selectAll("[data-name='Attendance_2022']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2022']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2022']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2022']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2022']").classed('quarter_opacity', true);

  d3.selectAll("[data-name='Attendance_2023']").classed(
    'quarter_opacity',
    true,
  );
  d3.selectAll("[data-name='Attendance_2023']").classed('full_opacity', false);
  d3.selectAll("[data-name='Attendance_2023']").classed('base_width', true);
  d3.selectAll("[data-name='Attendance_2023']").classed(
    'increase_width',
    false,
  );
  d3.selectAll("[data-name='Legend_2023']").classed('quarter_opacity', true);

  // set all annotations to not be visible and to have opacity of 0 at start

  initialHide('Cornell_2018');
  initialHide('Yale_2019');
  initialHide('Pride_2020');
  initialHide('Penn_2022');
  initialHide('Seton_2022');
  initialHide('Sell_2022');
  initialHide('Champs_2023');
  initialHide('Duke_2023');
  initialHide('NewEd_2023');

  // the education ones are weird: some of them are just id, some are just data-name. I can’t remember exactly which were which
  initialHide('Education_2017_arrow');
  initialHide('Education_2017_text');
  initialHide('Education_day');
  initialHide('Education_other');
  initialHide('Education_2017');
  initialHide('Education_2018');
  initialHide('Education_2019');
  initialHide('Education_2023');

  /*
        Education_2017_arrow
        Education_2017_text
        Education_day
        Education_other
        Education_2018
        Education_2019
        Education_2023


        Yale_2019
        Pride_2020
        Penn_2022
        Seton_2022
        Sell_2022
        Champs_2023
        Duke_2023
        NewEd_2023






        */
}

function step_0() {
  fade_out_line();
  fade_out();
  fade_in_line('Attendance_2017', 'Legend_2017');
  fade_in('Education_2017_arrow');
  fade_in('Education_2017_text');
  fade_in('Education_day');
  fade_in('Education_2017');
}
function step_1() {
  
  // NOTHING
}
function step_2() {
  fade_out('Education_day');
  fade_out_id('Education_2017_text');
  fade_in('Education_other');
  fade_in('Education_2018');
  fade_in('Education_2019');
  fade_in('Education_2023');
}
function step_3() {
  fade_out();
  fade_in('Cornell_2018');
  

  

}
function step_4() {
 
  
}
function step_5() {
  // this is Cornell again
  // stuff to make sure it doesnt look weird when you scroll up
  // I FORGET IF THIS GOES IN THE PLACEHOLDER OR NOT
  fade_out_line('Attendance_2018', 'Legend_2018');
  fade_in_line('Attendance_2017', 'Legend_2017');
  fade_out('Cornell_2018'); // this fades out everything except Cornell_2018
}
function step_6() {
  
  fade_out();
  fade_out_line();
  fade_in_line('Attendance_2018', 'Legend_2018');
  fade_in('Yale_2019');
}
function step_7() {
  // to make sure it doesnt look weird when you scroll up
  fade_out_line('Attendance_2019', 'Legend_2019');
  fade_in_line('Attendance_2018', 'Legend_2018');
  fade_out('Yale_2019'); // idk if this is necessary
  
}
function step_8() {
  fade_out();
  fade_out_line();
  fade_in_line('Attendance_2019', 'Legend_2019');
  fade_in('Pride_2020');
  
}
function step_9() {
   // Pride again
}
function step_10() {
   // to make sure it doesnt look weird when you scroll up
   fade_out_line('Attendance_2021', 'Legend_2021');
   fade_in_line('Attendance_2019', 'Legend_2019');
   fade_out('Pride_2020'); // idk if this is necessary
}
function step_11() {
  fade_out();
  fade_out_line();
  fade_in_line('Attendance_2021', 'Legend_2021');
  fade_in('Penn_2022');
}
function step_12() {
  // Penn again
}
function step_13() {
  // Penn again
}
function step_14() {
  fade_out('Penn_2022'); // idk if this is necessary
}
function step_15() {
  fade_out();
  fade_in('Seton_2022');
}
function step_16() {
  // to make sure it doesnt look weird when you scroll up
  fade_out_line('Attendance_2022', 'Legend_2022');
  fade_in_line('Attendance_2021', 'Legend_2021');
  fade_out('Seton_2022'); // idk if this is necessary
}
function step_17() {
  fade_out();
  fade_out_line();
  fade_in_line('Attendance_2022', 'Legend_2022');
  fade_in('Sell_2022');
}
function step_18() {
  
}
function step_19() {
  fade_out('Sell_2022');
}
function step_20() {
  fade_out();
  fade_in('Champs_2023');
}
function step_21() {
 
}
function step_22() {
   // to make sure it doesnt look weird when you scroll up
   fade_out_line('Attendance_2023', 'Legend_2023');
   fade_in_line('Attendance_2022', 'Legend_2022');
   fade_out('Champs_2023'); // idk if this is necessary
}
function step_23() {
  fade_out();
  fade_out_line();
  fade_in_line('Attendance_2023', 'Legend_2023');
  fade_in('Duke_2023');
}
function step_24() {
  fade_out('Duke_2023');
}
function step_25() {
  fade_out();
  fade_in('NewEd_2023');
  fade_in('Education_2023');
}
function step_26() {
  
}

var stepFunctions = [
  step_0,
  step_1,
  step_2,
  step_3,
  step_4,
  step_5,
  step_6,
  step_7,
  step_8,
  step_9,
  step_10,
  step_11,
  step_12,
  step_13,
  step_14,
  step_15,
  step_16,
  step_17,
  step_18,
  step_19,
  step_20,
  step_21,
  step_22,
  step_23,
  step_24,
  step_25,
  step_26,
];

function fade_in(name) {
  d3.selectAll('#' + name).classed('fade_in', true);
  d3.selectAll('[data-name=' + name + ']').classed('fade_in', true);
}

function fade_out(name) {
  if (arguments.length == 0) {
    d3.selectAll('.fade_in').classed('fade_in',false);
    d3.selectAll('.visible').classed('visible', false);
  } else if (arguments.length == 1) {
    d3.selectAll('[data-name=' + name + ']').classed('visible',true);
    d3.selectAll('#' + name).classed('visible',true);
    d3.selectAll('.fade_in').classed('fade_in',false);
  }
}

function fade_in_id(name) {
  d3.selectAll('#' + name).classed('fade_in', true);
}

function fade_out_id(name) {
  d3.selectAll('#' + name).classed('fade_in', false);
  d3.selectAll('#' + name).classed('visible', false);
}

function fade_in_dn(name) {
  d3.selectAll('[data-name=' + name + ']').classed('fade_in', true);
}

function fade_in_line(name, name_2) {
  d3.selectAll('[data-name=' + name + ']').classed('full_opacity', true);
  d3.selectAll('[data-name=' + name + ']').classed('increase_width', true);
  d3.selectAll('[data-name=' + name_2 + ']').classed('full_opacity', true);
}

function fade_out_line(name, name_2) {
  if (arguments.length === 0) {
    d3.selectAll('.full_opacity').classed('full_opacity', false);
    d3.selectAll('.increase_width').classed('increase_width', false);
  } else if (arguments.length === 1) {
    d3.selectAll('[data-name=' + name + ']').classed('full_opacity', false);
    d3.selectAll('[data-name=' + name + ']').classed('increase_width', false);
  }
  else if (arguments.length === 2) {
    d3.selectAll('[data-name=' + name + ']').classed('full_opacity', false);
    d3.selectAll('[data-name=' + name + ']').classed('increase_width', false);
    d3.selectAll('[data-name=' + name_2 + ']').classed('full_opacity', false);
  }
}

// function to condense hiding stuff for the setup
function initialHide(name) {
  d3.selectAll('#' + name).classed('fade_in', false);
  d3.selectAll('[data-name=' + name + ']').classed('fade_in', false);
  d3.selectAll('#' + name).classed('hidden', true);
  d3.selectAll('[data-name=' + name + ']').classed('hidden', true);
}



function init() {
  // 2. setup the scroller passing options
  //    this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  setup();
  scroller
    .setup({
      step: '#scrolly article .step',
      offset: 0.98,
      debug: false,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();
