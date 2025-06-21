function openMember(relativePath) {
  const currentBase = window.location.pathname.split("/")[1]; // = "Portfolio.github.io"
  const fullPath = "/" + currentBase + "/" + relativePath;
  window.open(fullPath, "_blank");
}
