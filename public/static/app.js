/* CrackIT static app — theme persistence, sidebar, dropdowns, toasts */
(function () {
  var KEY = "crackit-theme";

  function systemDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function apply(theme) {
    var dark = theme === "dark" || (theme === "system" && systemDark());
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }

  window.CrackIT = {
    getTheme: function () {
      return localStorage.getItem(KEY) || "system";
    },
    setTheme: function (theme) {
      localStorage.setItem(KEY, theme);
      apply(theme);
      document.querySelectorAll("[data-theme-option]").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn.dataset.themeOption === theme));
      });
    },
    toast: function (message) {
      var el = document.getElementById("toast");
      if (!el) return;
      el.textContent = message;
      el.classList.add("show");
      clearTimeout(el._t);
      el._t = setTimeout(function () {
        el.classList.remove("show");
      }, 2600);
    },
  };

  apply(window.CrackIT.getTheme());

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (window.CrackIT.getTheme() === "system") apply("system");
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Mobile sidebar
    var sidebar = document.querySelector(".sidebar");
    var backdrop = document.querySelector(".backdrop");
    var menuBtn = document.querySelector(".menu-btn");
    function closeNav() {
      sidebar && sidebar.classList.remove("open");
      backdrop && backdrop.classList.remove("open");
    }
    menuBtn &&
      menuBtn.addEventListener("click", function () {
        sidebar.classList.add("open");
        backdrop.classList.add("open");
      });
    backdrop && backdrop.addEventListener("click", closeNav);

    // Dropdowns
    document.querySelectorAll("[data-dropdown]").forEach(function (trigger) {
      var menu = document.getElementById(trigger.dataset.dropdown);
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = menu.classList.contains("open");
        document.querySelectorAll(".dropdown.open").forEach(function (m) {
          m.classList.remove("open");
        });
        menu.classList.toggle("open", !open);
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown.open").forEach(function (m) {
        m.classList.remove("open");
      });
    });

    // Theme buttons (settings page)
    document.querySelectorAll("[data-theme-option]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.themeOption === window.CrackIT.getTheme()));
      btn.addEventListener("click", function () {
        window.CrackIT.setTheme(btn.dataset.themeOption);
      });
    });

    // Switches
    document.querySelectorAll(".switch").forEach(function (sw) {
      sw.addEventListener("click", function () {
        sw.setAttribute("aria-checked", sw.getAttribute("aria-checked") === "true" ? "false" : "true");
      });
    });

    // Logout placeholder — replace with your auth logic / redirect to login.html
    var logout = document.querySelector(".logout");
    logout &&
      logout.addEventListener("click", function () {
        window.CrackIT.toast("Logout is handled by the authentication module.");
      });

    // Search
    var form = document.querySelector(".search");
    form &&
      form.addEventListener("submit", function (e) {
        e.preventDefault();
      });
  });
})();
