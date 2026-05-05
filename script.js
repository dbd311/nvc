const observationInput = document.getElementById('observation');
const feelingInput = document.getElementById('feeling');
const needInput = document.getElementById('need');
const requestInput = document.getElementById('request');
const buildButton = document.getElementById('build-button');
const resultOutput = document.getElementById('result');
const languageSelector = document.getElementById('language-selector');

const translations = {
  en: {
    pageTitle: 'NVC Practice',
    languageLabel: 'Language',
    title: 'Non-Violent Communication',
    intro: "Learn Marshall Rosenberg's NVC process and practice building compassionate, clear messages.",
    startButton: 'Start Practicing',
    componentsHeading: 'The Four NVC Components',
    componentObservation: '1. Observation',
    componentObservationText: 'Describe what happened without judgment or interpretation.',
    componentFeeling: '2. Feeling',
    componentFeelingText: 'Share how you feel in response to the observation.',
    componentNeed: '3. Need',
    componentNeedText: 'Connect your feeling to an unmet need or value.',
    componentRequest: '4. Request',
    componentRequestText: 'Ask for a clear, positive action to meet your need.',
    exampleHeading: 'Example',
    exampleObservationLabel: 'Observation:',
    exampleObservationText: 'When I saw the report arrive late...',
    exampleFeelingLabel: 'Feeling:',
    exampleFeelingText: 'I felt stressed and frustrated.',
    exampleNeedLabel: 'Need:',
    exampleNeedText: 'I need reliability and timely communication.',
    exampleRequestLabel: 'Request:',
    exampleRequestText: 'Would you be willing to send me an update sooner next time?',
    practiceHeading: 'Practice your own NVC statement',
    practiceInstructions: 'Fill in the fields and click <strong>Build Statement</strong> for a compassionate, structured response.',
    labelObservation: 'Observation',
    observationPlaceholder: 'What did you see or hear?',
    labelFeeling: 'Feeling',
    feelingPlaceholder: 'How do you feel?',
    labelNeed: 'Need',
    needPlaceholder: 'What need or value is present?',
    labelRequest: 'Request',
    requestPlaceholder: 'What would you like to ask for?',
    buildButton: 'Build Statement',
    resultHeading: 'Your NVC statement',
    resultDefault: 'Complete all fields to see your statement.',
    tipsHeading: 'Tips for compassionate communication',
    tip1: 'Focus on observations, not evaluations.',
    tip2: 'Express feelings honestly, without blaming.',
    tip3: 'Connect to needs rather than demands.',
    tip4: 'Phrase requests positively and clearly.',
    shareHeading: 'Share this page',
    shareText: 'Scan this QR code to open this practice page on another device.',
    footerText: 'Built for learning NVC with an easy web practice tool.',
    qrUnavailable: 'QR code generator unavailable. Please refresh or check your connection.',
    statementTemplate: 'When {observation},\nI feel {feeling} because I need {need}.\nWould you be willing to {request}?',
  },
  fr: {
    pageTitle: 'Pratique CNV',
    languageLabel: 'Langue',
    title: 'Communication Non Violente',
    intro: "Apprenez le processus de CNV de Marshall Rosenberg et entraînez-vous à formuler des messages clairs et bienveillants.",
    startButton: 'Commencer',
    componentsHeading: 'Les quatre composantes de la CNV',
    componentObservation: '1. Observation',
    componentObservationText: 'Décrivez ce qui s’est passé sans jugement ni interprétation.',
    componentFeeling: '2. Sentiment',
    componentFeelingText: 'Partagez ce que vous ressentez en réponse à cette observation.',
    componentNeed: '3. Besoin',
    componentNeedText: 'Reliez votre sentiment à un besoin ou une valeur.',
    componentRequest: '4. Demande',
    componentRequestText: 'Demandez une action claire et positive pour répondre à votre besoin.',
    exampleHeading: 'Exemple',
    exampleObservationLabel: 'Observation :',
    exampleObservationText: 'Quand j’ai vu le rapport arriver en retard...',
    exampleFeelingLabel: 'Sentiment :',
    exampleFeelingText: 'Je me suis senti(e) stressé(e) et frustré(e).',
    exampleNeedLabel: 'Besoin :',
    exampleNeedText: 'J’ai besoin de fiabilité et de communication en temps utile.',
    exampleRequestLabel: 'Demande :',
    exampleRequestText: 'Seriez-vous prêt(e) à m’envoyer une mise à jour plus tôt la prochaine fois ?',
    practiceHeading: 'Entraînez-vous à formuler votre phrase CNV',
    practiceInstructions: 'Remplissez les champs et cliquez sur <strong>Construire la phrase</strong> pour obtenir une réponse structurée et bienveillante.',
    labelObservation: 'Observation',
    observationPlaceholder: 'Que voyez-vous ou entendez-vous ?',
    labelFeeling: 'Sentiment',
    feelingPlaceholder: 'Comment vous sentez-vous ?',
    labelNeed: 'Besoin',
    needPlaceholder: 'Quel besoin ou quelle valeur est présent ?',
    labelRequest: 'Demande',
    requestPlaceholder: 'Que souhaitez-vous demander ?',
    buildButton: 'Construire la phrase',
    resultHeading: 'Votre phrase CNV',
    resultDefault: 'Complétez tous les champs pour voir votre phrase.',
    tipsHeading: 'Conseils pour une communication bienveillante',
    tip1: 'Concentrez-vous sur les observations, pas sur les évaluations.',
    tip2: 'Exprimez vos sentiments honnêtement, sans blâmer.',
    tip3: 'Reliez aux besoins plutôt qu’aux exigences.',
    tip4: 'Formulez des demandes positives et claires.',
    shareHeading: 'Partager cette page',
    shareText: 'Scannez ce QR code pour ouvrir cette page sur un autre appareil.',
    footerText: 'Conçu pour apprendre la CNV avec un outil de pratique facile.',
    qrUnavailable: 'Générateur de QR code indisponible. Actualisez ou vérifiez votre connexion.',
    statementTemplate: 'Quand {observation},\nJe ressens {feeling} parce que j’ai besoin de {need}.\nSeriez-vous prêt(e) à {request} ?',
  },
  vi: {
    pageTitle: 'Luyện tập NVC',
    languageLabel: 'Ngôn ngữ',
    title: 'Giao tiếp Phi bạo lực',
    intro: 'Tìm hiểu quy trình NVC của Marshall Rosenberg và luyện tập tạo các thông điệp rõ ràng, cảm thông.',
    startButton: 'Bắt đầu',
    componentsHeading: 'Bốn thành phần của NVC',
    componentObservation: '1. Quan sát',
    componentObservationText: 'Mô tả những gì xảy ra mà không phán xét hay diễn giải.',
    componentFeeling: '2. Cảm xúc',
    componentFeelingText: 'Chia sẻ bạn cảm thấy như thế nào khi nhìn thấy sự việc.',
    componentNeed: '3. Nhu cầu',
    componentNeedText: 'Kết nối cảm xúc với nhu cầu hoặc giá trị của bạn.',
    componentRequest: '4. Yêu cầu',
    componentRequestText: 'Yêu cầu một hành động rõ ràng, tích cực để đáp ứng nhu cầu của bạn.',
    exampleHeading: 'Ví dụ',
    exampleObservationLabel: 'Quan sát:',
    exampleObservationText: 'Khi tôi thấy báo cáo đến muộn...',
    exampleFeelingLabel: 'Cảm xúc:',
    exampleFeelingText: 'Tôi cảm thấy căng thẳng và bực bội.',
    exampleNeedLabel: 'Nhu cầu:',
    exampleNeedText: 'Tôi cần sự tin cậy và thông tin kịp thời.',
    exampleRequestLabel: 'Yêu cầu:',
    exampleRequestText: 'Bạn có thể cho tôi biết sớm hơn lần sau được không?',
    practiceHeading: 'Luyện tập câu NVC của bạn',
    practiceInstructions: 'Điền vào các trường và nhấn <strong>Xây dựng câu</strong> để có một phản hồi có cấu trúc và cảm thông.',
    labelObservation: 'Quan sát',
    observationPlaceholder: 'Bạn đã thấy hoặc nghe gì?',
    labelFeeling: 'Cảm xúc',
    feelingPlaceholder: 'Bạn cảm thấy như thế nào?',
    labelNeed: 'Nhu cầu',
    needPlaceholder: 'Nhu cầu hoặc giá trị nào đang hiện hữu?',
    labelRequest: 'Yêu cầu',
    requestPlaceholder: 'Bạn muốn yêu cầu điều gì?',
    buildButton: 'Xây dựng câu',
    resultHeading: 'Câu NVC của bạn',
    resultDefault: 'Hoàn thành tất cả các trường để xem câu của bạn.',
    tipsHeading: 'Mẹo giao tiếp cảm thông',
    tip1: 'Tập trung vào quan sát, không đánh giá.',
    tip2: 'Thể hiện cảm xúc một cách trung thực, không trách móc.',
    tip3: 'Kết nối với nhu cầu thay vì yêu cầu.',
    tip4: 'Diễn đạt yêu cầu một cách tích cực và rõ ràng.',
    shareHeading: 'Chia sẻ trang này',
    shareText: 'Quét mã QR để mở trang này trên thiết bị khác.',
    footerText: 'Xây dựng để học NVC với một công cụ luyện tập dễ dùng.',
    qrUnavailable: 'Trình tạo mã QR hiện không khả dụng. Vui lòng làm mới hoặc kiểm tra kết nối.',
    statementTemplate: 'Khi {observation},\nTôi cảm thấy {feeling} vì tôi cần {need}.\nBạn có thể {request} không?',
  },
  de: {
    pageTitle: 'NVC Übung',
    languageLabel: 'Sprache',
    title: 'Gewaltfreie Kommunikation',
    intro: 'Lerne Marshall Rosenbergs NVC-Prozess und übe mitfühlende, klare Botschaften zu formulieren.',
    startButton: 'Loslegen',
    componentsHeading: 'Die vier NVC-Komponenten',
    componentObservation: '1. Beobachtung',
    componentObservationText: 'Beschreibe, was passiert ist, ohne zu bewerten oder zu interpretieren.',
    componentFeeling: '2. Gefühl',
    componentFeelingText: 'Teile mit, wie du dich als Reaktion auf die Beobachtung fühlst.',
    componentNeed: '3. Bedürfnis',
    componentNeedText: 'Verbinde dein Gefühl mit einem unerfüllten Bedürfnis oder Wert.',
    componentRequest: '4. Bitte',
    componentRequestText: 'Bitte um eine klare, positive Handlung, die dein Bedürfnis erfüllt.',
    exampleHeading: 'Beispiel',
    exampleObservationLabel: 'Beobachtung:',
    exampleObservationText: 'Als ich den Bericht verspätet erhielt...',
    exampleFeelingLabel: 'Gefühl:',
    exampleFeelingText: 'Ich fühlte mich gestresst und frustriert.',
    exampleNeedLabel: 'Bedürfnis:',
    exampleNeedText: 'Ich brauche Zuverlässigkeit und rechtzeitige Kommunikation.',
    exampleRequestLabel: 'Bitte:',
    exampleRequestText: 'Wärst du bereit, mir beim nächsten Mal früher ein Update zu schicken?',
    practiceHeading: 'Übe deinen eigenen NVC-Satz',
    practiceInstructions: 'Fülle die Felder aus und klicke auf <strong>Satz erstellen</strong> für eine mitfühlende, strukturierte Antwort.',
    labelObservation: 'Beobachtung',
    observationPlaceholder: 'Was hast du gesehen oder gehört?',
    labelFeeling: 'Gefühl',
    feelingPlaceholder: 'Wie fühlst du dich?',
    labelNeed: 'Bedürfnis',
    needPlaceholder: 'Welches Bedürfnis oder welchen Wert gibt es?',
    labelRequest: 'Bitte',
    requestPlaceholder: 'Was möchtest du erbitten?',
    buildButton: 'Satz erstellen',
    resultHeading: 'Dein NVC-Satz',
    resultDefault: 'Fülle alle Felder aus, um deinen Satz zu sehen.',
    tipsHeading: 'Tipps für ein mitfühlendes Gespräch',
    tip1: 'Konzentriere dich auf Beobachtungen, nicht auf Bewertungen.',
    tip2: 'Äußere Gefühle ehrlich, ohne Vorwürfe.',
    tip3: 'Verknüpfe Bedürfnisse statt Forderungen.',
    tip4: 'Formuliere Bitten positiv und klar.',
    shareHeading: 'Teile diese Seite',
    shareText: 'Scanne diesen QR-Code, um diese Seite auf einem anderen Gerät zu öffnen.',
    footerText: 'Entwickelt, um NVC mit einem einfachen Übungswerkzeug zu lernen.',
    qrUnavailable: 'QR-Code-Generator nicht verfügbar. Bitte aktualisiere oder prüfe deine Verbindung.',
    statementTemplate: 'Wenn {observation},\nich fühle mich {feeling}, weil ich {need} brauche.\nWärst du bereit, {request}?',
  },
  it: {
    pageTitle: 'Pratica NVC',
    languageLabel: 'Lingua',
    title: 'Comunicazione Non Violenta',
    intro: 'Scopri il processo NVC di Marshall Rosenberg e pratica a creare messaggi chiari e compassionevoli.',
    startButton: 'Inizia',
    componentsHeading: 'Le quattro componenti della NVC',
    componentObservation: '1. Osservazione',
    componentObservationText: 'Descrivi ciò che è accaduto senza giudizio o interpretazione.',
    componentFeeling: '2. Sentimento',
    componentFeelingText: 'Condividi come ti senti in risposta all’osservazione.',
    componentNeed: '3. Bisogno',
    componentNeedText: 'Collega il tuo sentimento a un bisogno o valore insoddisfatto.',
    componentRequest: '4. Richiesta',
    componentRequestText: 'Chiedi un’azione chiara e positiva per soddisfare il tuo bisogno.',
    exampleHeading: 'Esempio',
    exampleObservationLabel: 'Osservazione:',
    exampleObservationText: 'Quando ho visto che il report è arrivato in ritardo...',
    exampleFeelingLabel: 'Sentimento:',
    exampleFeelingText: 'Mi sono sentito stressato e frustrato.',
    exampleNeedLabel: 'Bisogno:',
    exampleNeedText: 'Ho bisogno di affidabilità e comunicazioni tempestive.',
    exampleRequestLabel: 'Richiesta:',
    exampleRequestText: 'Saresti disponibile a inviarmi un aggiornamento prima la prossima volta?',
    practiceHeading: 'Esercita la tua frase NVC',
    practiceInstructions: 'Compila i campi e clicca su <strong>Crea frase</strong> per una risposta empatica e strutturata.',
    labelObservation: 'Osservazione',
    observationPlaceholder: 'Cosa hai visto o sentito?',
    labelFeeling: 'Sentimento',
    feelingPlaceholder: 'Come ti senti?',
    labelNeed: 'Bisogno',
    needPlaceholder: 'Quale bisogno o valore è presente?',
    labelRequest: 'Richiesta',
    requestPlaceholder: 'Cosa vorresti chiedere?',
    buildButton: 'Crea frase',
    resultHeading: 'La tua frase NVC',
    resultDefault: 'Completa tutti i campi per vedere la tua frase.',
    tipsHeading: 'Suggerimenti per una comunicazione compassionevole',
    tip1: 'Concentrati sulle osservazioni, non sulle valutazioni.',
    tip2: 'Esprimi i sentimenti onestamente, senza incolpare.',
    tip3: 'Collega ai bisogni invece che alle richieste.',
    tip4: 'Formula le richieste in modo positivo e chiaro.',
    shareHeading: 'Condividi questa pagina',
    shareText: 'Scansiona questo QR code per aprire questa pagina su un altro dispositivo.',
    footerText: 'Creato per imparare la NVC con uno strumento di esercizio semplice.',
    qrUnavailable: 'Generatore di QR code non disponibile. Aggiorna o controlla la connessione.',
    statementTemplate: 'Quando {observation},\nmi sento {feeling} perché ho bisogno di {need}.\nSaresti disposto a {request}?',
  },
};

let currentLanguage = 'en';

function translate(key) {
  return (translations[currentLanguage] && translations[currentLanguage][key]) || translations.en[key] || '';
}

function applyTranslations() {
  document.title = translate('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translationKey = element.dataset.i18n;
    element.textContent = translate(translationKey);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const translationKey = element.dataset.i18nHtml;
    element.innerHTML = translate(translationKey);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const translationKey = element.dataset.i18nPlaceholder;
    element.placeholder = translate(translationKey);
  });

  const resultDefault = translate('resultDefault');
  if (resultOutput.textContent === translations.en.resultDefault ||
      resultOutput.textContent === translations.fr.resultDefault ||
      resultOutput.textContent === translations.vi.resultDefault) {
    resultOutput.textContent = resultDefault;
  }
}

function buildStatement() {
  const observation = observationInput.value.trim();
  const feeling = feelingInput.value.trim();
  const need = needInput.value.trim();
  const request = requestInput.value.trim();

  if (!observation || !feeling || !need || !request) {
    resultOutput.textContent = translate('resultDefault');
    return;
  }

  const template = translate('statementTemplate');
  const statement = template
    .replace('{observation}', observation)
    .replace('{feeling}', feeling)
    .replace('{need}', need)
    .replace('{request}', request);

  resultOutput.textContent = statement;
}

function updateQrCode() {
  const qrCodeContainer = document.getElementById('qr-code');
  const qrUrl = document.getElementById('qr-url');
  const pageUrl = window.location.href;

  if (qrCodeContainer) {
    qrCodeContainer.innerHTML = '';
    if (typeof QRCode === 'function') {
      new QRCode(qrCodeContainer, {
        text: pageUrl,
        width: 180,
        height: 180,
        colorDark: '#0f172a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
    } else {
      qrCodeContainer.textContent = translate('qrUnavailable');
      qrCodeContainer.style.color = '#e2e8f0';
      qrCodeContainer.style.minHeight = '180px';
    }
  }

  if (qrUrl) {
    qrUrl.textContent = pageUrl;
  }
}

function initializeLanguage() {
  if (languageSelector) {
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener('change', (event) => {
      currentLanguage = event.target.value;
      applyTranslations();
    });
  }
}

buildButton.addEventListener('click', buildStatement);
window.addEventListener('load', () => {
  initializeLanguage();
  applyTranslations();
  updateQrCode();
});
