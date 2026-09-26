// ==================== Disable automatic Dropzone ====================
if (typeof Dropzone !== "undefined") {
  Dropzone.autoDiscover = false;
}

// ==================== DOMContentLoaded ====================
document.addEventListener('DOMContentLoaded', function() {


  // ==================== Dropzone Initialization ====================
  const dzContainer = document.getElementById("imageUpload");
  const dzInput = document.getElementById("images");
  let dzInstance = null;

  if (dzContainer && dzInput && typeof Dropzone !== "undefined") {
    dzInstance = new Dropzone(dzContainer, {
      url: "/fake-upload", // dummy URL to avoid Dropzone error
      autoProcessQueue: false,
      maxFiles: 10,
      maxFilesize: 20,
      acceptedFiles: "image/*",
      addRemoveLinks: true,
      init: function() {

        // Update hidden input on add/remove
        this.on("addedfile", () => updateHiddenInput(dzInput, this.files));
        this.on("removedfile", () => updateHiddenInput(dzInput, this.files));

        // Optional error handling
        this.on("error", (file, response) => alert(response));
      }
    });
  }

  // ==================== Form Validation ====================
  const form = document.getElementById("quoteForm");
  if (!form) return;

  const fields = ["firstName", "lastName", "email", "phone", "message"];

  // --------- Blur Validation (instant feedback) ---------
  fields.forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener("blur", () => validateFieldOnBlur(id));
  });

  // --------- Submit Validation ---------
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    e.stopPropagation();

    let valid = true;

    // Validate all inputs
    fields.forEach(id => {
      if (!validateFieldOnBlur(id)) valid = false;
    });

    // Validate Dropzone images
    if (!validateImages(dzInput)) valid = false;

    form.classList.add("was-validated");

    // Focus first invalid field
    if (!valid) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Submit the form if valid
    form.submit();
  });
});

// ==================== Update hidden input with Dropzone files ====================
function updateHiddenInput(input, files) {
  const dataTransfer = new DataTransfer();
  files.forEach(f => dataTransfer.items.add(f));
  input.files = dataTransfer.files;
}

// ==================== Field Validation Function ====================
function validateFieldOnBlur(id) {
  const field = document.getElementById(id);
  const error = document.getElementById(id + "Error");
  if (!field) return false;

  const value = field.value.trim();
  let valid = true;
  let msg = "";

  if (!value) {
    msg = `${field.getAttribute("placeholder") || id} is required`;
    valid = false;
  } else {
    if (id === "firstName" || id === "lastName") {
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/.test(value)) {
        msg = "Only letters allowed (2-30 chars)";
        valid = false;
      }
    } else if (id === "email") {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        msg = "Enter a valid email";
        valid = false;
      }
    } else if (id === "phone") {
      if (!/^\+?[\d\s\-()]{7,}$/.test(value)) {
        msg = "Enter a valid phone number";
        valid = false;
      }
    } else if (id === "message") {
      if (value.length < 10) {
        msg = "Please enter at least 10 characters";
        valid = false;
      }
    }
  }

  field.setCustomValidity(valid ? "" : msg);
  if (error) error.textContent = msg;

  return valid;
}

// ==================== Dropzone / File Input Validation ====================
function validateImages(input) {
  const error = document.getElementById("uploadError");
  const files = input ? input.files : [];
  let valid = true;
  let msg = "";

  if (!files.length) {
    msg = "Please upload at least 2 images";
    valid = false;
  } else if (files.length < 2 || files.length > 10) {
    msg = "Upload between 2 and 10 images";
    valid = false;
  }

  if (error) error.textContent = msg;
  input.setCustomValidity(valid ? "" : msg);
  return valid;
}
