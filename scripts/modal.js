$("#support-center").click(function () {
  $("#myModal").removeClass("hidden");
  $("#support-center-large").removeClass("hidden");
});

$("#support-center").hover(
  function () {
    this.style.cursor = "pointer";
  },
  function () {
    this.style.cursor = "default";
  }
);

$("#forum").click(function () {
  $("#myModal").removeClass("hidden");
  $("#forum-large").removeClass("hidden");
});

$("#forum").hover(
  function () {
    this.style.cursor = "pointer";
  },
  function () {
    this.style.cursor = "default";
  }
);

$("#close").click(function () {
  $("#myModal").addClass("hidden");
  $(".modal-content").addClass("hidden");
});
