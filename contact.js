document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("quote-form");
  if (!form) return;
  var status = document.getElementById("form-status");

  function buildMessage() {
    var name = form.name.value.trim();
    var org = form.org.value.trim();
    var contact = form.contact.value.trim();
    var city = form.city.value.trim();
    var type = form.type.value;
    var details = form.details.value.trim();

    var lines = [
      "Demande de devis — MOHAMMEDI HVAC ENGINEERING",
      "Nom : " + (name || "—"),
      "Entreprise / organisme : " + (org || "—"),
      "Contact (e-mail / téléphone) : " + (contact || "—"),
      "Wilaya / ville : " + (city || "—"),
      "Type de projet : " + (type || "—"),
      "",
      "Besoin et informations disponibles :",
      details || "—"
    ];
    return lines.join("\n");
  }

  function validate() {
    if (!form.name.value.trim() || !form.contact.value.trim() || !form.details.value.trim()) {
      status.textContent = "Merci de renseigner au moins votre nom, un contact et votre besoin.";
      return false;
    }
    status.textContent = "Votre demande est prête à être envoyée.";
    return true;
  }

  document.getElementById("send-whatsapp").addEventListener("click", function () {
    if (!validate()) return;
    var text = encodeURIComponent(buildMessage());
    window.open("https://wa.me/213781222932?text=" + text, "_blank");
  });

  document.getElementById("send-email").addEventListener("click", function () {
    if (!validate()) return;
    var subject = encodeURIComponent("Demande de devis — MOHAMMEDI HVAC ENGINEERING");
    var body = encodeURIComponent(buildMessage());
    window.location.href = "mailto:djamalmohammedi@gmail.com?subject=" + subject + "&body=" + body;
  });
});
