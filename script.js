$(function () {
  let stack = [];
  const frame = $(".real-frame");

  function _init_function() {
    // remove click event before
    $(".btn-add").unbind("click");
    $(".btn-remove").unbind("click");

    // add
    $(".btn-add").click(() => {
      console.log("button add clicked");
      $(".real-frame").children().last().clone().appendTo(frame);
      save();
    });

    // remove
    $(".btn-remove").click(() => {
      console.log("button add clicked");
      frame.children().last().remove();
      save();
    });
  }

  function save() {
    const state = frame.prop("outerHTML");
    stack.push(state);
  }

  // undo
  $(".btn-undo").click(() => {
    frame.replaceWith(stack[stack.length - 2]);
    stack.splice(-1);
    _init_function();
  });

  _init_function();
});
