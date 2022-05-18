const laptopModelURL =
  "https://teachablemachine.withgoogle.com/models/oQapXjh1t/";
const phoneModelURL =
  "https://teachablemachine.withgoogle.com/models/6Oapb3YVQ/";
let classifier;

const isAndroid = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) return true;
  return false;
};

const isIos = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/i.test(userAgent)) return true;
  return false;
};

const isMobile = () => {
  if (window.cordova && (isAndroid() || isIos())) {
    return true;
  } else {
    return false;
  }
};

const loadModel = async () => {
  let currentModelURL = isAndroid ? phoneModelURL : laptopModelURL;
  const options = { probabilityThreshold: 0.8 };

  if (isMobile()) {
    document.addEventListener("deviceready", async () => {
      cordova.plugins.diagnostic.requestMicrophoneAuthorization(
        (status) => {
          if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {
            console.log("Microphone use is authorized");
          }
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  classifier = await ml5.soundClassifier(
    currentModelURL + "model.json",
    options
  );
};

const startPrediction = async (callback) => {
  classifier.classify(gotResults);

  function gotResults(error, results) {
    if (error) {
      console.error(error);
      return;
    }
    callback(results[0].label);
  }
};

const helperFunctions = {
  loadModel,
  isIos,
  startPrediction,
};

export default helperFunctions;
