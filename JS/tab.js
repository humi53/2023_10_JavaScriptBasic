/**
 * 버튼 0 누르면
 * 모든 버튼?에 붙은 orange 클래스명 제거
 * 버튼 0에 orange 클래스명 추가
 * 모든 div에 붙은 show 클래스명 제거
 * div0에 show 클래스명 추가
 */
// $('.tab-button').eq(0).on('click', function() {
// $('.tab-button').[0].on('click', function() {
// eq(0)로 해야 jquery 작동 [0]로 하면 바닐라로만 작동.
$(".tab-button").on("click", function (e) {
  const tabButtons = $(".tab-button");
  const tabContents = $(".tab-content");
  const tabButtonLength = tabButtons.length;
  const clickedElement = e.target;
  tabButtons.removeClass("orange");
  tabContents.removeClass("show");
  for (let i = 0; i < tabButtonLength; i++) {
    if (tabButtons.eq(i).is(clickedElement)) {
      tabButtons.eq(i).addClass("orange");
      tabContents.eq(i).addClass("show");
      break;
    }
  }
});
