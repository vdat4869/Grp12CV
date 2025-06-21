let memberWin = null;
function openMember(url) {
  const name = 'memberWindow'; // tên cố định để tái sử dụng tab
  if (!memberWin || memberWin.closed) {
    memberWin = window.open(url, name);
  } else {
    memberWin.location.href = url;
    memberWin.focus();
  }
}
