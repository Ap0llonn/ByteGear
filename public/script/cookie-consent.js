const options = {
    backdrop: true,
    focus: true,
    keyboard: true
};

const cookieConsentModal = new bootstrap.Modal('#cookieConsent', options);

const cookieConsentAccepted = localStorage.getItem("cookieConsentAccepted");
if (!cookieConsentAccepted) {
    cookieConsentModal.show();
    localStorage.setItem("cookieConsentAccepted", "true");

}
