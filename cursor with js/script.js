
  const cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    cursor.style.position = "absolute";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.transform = "translate(-50%, -50%)";
  });

