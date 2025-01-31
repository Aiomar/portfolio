//Dark / light mode controller
export function defaultTheme() {
  if (typeof localStorage !== "undefined") {
    const theme = localStorage.getItem("theme");
    const htmltag = document.documentElement;

    if (theme === "light") {
      htmltag.classList.remove("dark");
    } else {
      htmltag.classList.add("dark");
    }
  }
}

export function currentTheme() {
  const theme = localStorage.getItem("theme");
  return theme === "light";
}

export function toggleDarkMode(isLight) {
  //get acces to the html tag <html>
  const htmltag = document.documentElement;

  if (isLight) {
    //Remove dark to the class list
    window.location.reload();
    htmltag.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    //Add dark to the class list
    window.location.reload();
    htmltag.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
