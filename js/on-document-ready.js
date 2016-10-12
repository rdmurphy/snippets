/**
 * Provides a hook for a callback to be called once the document's content has
 * finished loading. If the document is already ready, the callback will be
 * called immediately.
 *
 * @param  {Function} callback
 * @return {void}
 * @example
 *
 * onDocumentReady(function () {
 *   // the document is now ready for whatever happens here
 * });
 */
export function onDocumentReady (callback) {
  // if we're still loading the page, let's set up a DOMContentLoaded event
  if (document.readyState === 'loading') {
    // set up our listener function so we can unset it once we use it
    var documentReadyListener = function () {
      // remove the listener
      document.removeEventListener('DOMContentLoaded', documentReadyListener, false);
      callback();
    };

    // set up the DOMContentLoaded listener
    document.addEventListener('DOMContentLoaded', documentReadyListener, false);
  } else {
    callback();
  }
}
