/**
 *
 * A version of `onDocumentReady` that instead returns a Promise. Provides a
 * hook to be called once the document's content has finished loading. If the
 * document is already ready, the callback will be called immediately.
 *
 * @return {Promise}
 * @example
 *
 * whenDocumentReady().then(function () {
 *   // the document is now ready for whatever happens here
 * });
 */
export function whenDocumentReady () {
  return new Promise(function (resolve) {
    // if we're still loading the page, let's set up a DOMContentLoaded event
    if (document.readyState === 'loading') {
      // set up our listener function so we can unset it once we use it
      var documentReadyListener = function () {
        // remove the listener
        document.removeEventListener('DOMContentLoaded', documentReadyListener, false);
        resolve();
      };

      // set up the DOMContentLoaded listener
      document.addEventListener('DOMContentLoaded', documentReadyListener, false);
    } else {
      resolve();
    }
  });
}
