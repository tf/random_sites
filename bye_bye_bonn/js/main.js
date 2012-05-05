jQuery(function($) {
  var scrollorama = $.scrollorama({
    blocks: 'section',
    enablePin: false
  });

  scrollorama.animate('#hint',{ delay: 20, duration: 300, property:'bottom', end: -300 });

  scrollorama.animate('h1', { duration: 400, property: 'opacity', start: 1.0, end: 0.0 });
  scrollorama.animate('h1', { duration: 400, property: 'zoom', end: 8 });

  scrollorama.animate('#juka',{ delay: 300, duration: 600, property:'rotate', start: -30, end: 10 });

  $('.slideLeft').each(function() {
    scrollorama.animate($(this), { delay: 200, duration: 1200, property:'left', start: 40, end: -40 });
  });

  $('.slideRight').each(function() {
    scrollorama.animate($(this), {delay: 200,  duration: 1200, property:'left', start: -40, end: 40 });
  });

  $('.zoom').each(function() {
    scrollorama.animate($(this), { delay: 200, duration: 1200, property:'zoom', end: 1.4 });
  });

  $('#title').lettering();
  scrollorama.animate('#title',{ delay: 500, duration: 300, property:'zoom', end: 8 });

  $('#title span').css({display: 'inline-block'});
  $('#title span').each(function() {
    scrollorama.animate($(this), { delay: 500, duration: 400, property: 'top', end: Math.random() * 120 - 180 });
    scrollorama.animate($(this), { delay: 500, duration: 300, property: 'rotate', start: 0, end: Math.random() * 720 - 360 });
    scrollorama.animate($(this), { delay: 600, duration: 200, property: 'opacity', start: 1.0, end: 0.0 });
  });

  $('section').each(function() {
    $('p', this).each(function(index) {
      scrollorama.animate($(this), { delay: 200 + index * 150, duration: 200, property: 'opacity', start: 0.0, end: 1.0 });
    });
  });

  scrollorama.animate('#end', { delay: 400, duration: 400, property: 'opacity', start: 1.0, end: 0.0 });
  scrollorama.animate('#end', { delay: 400, duration: 400, property: 'zoom', end: 8 });
});