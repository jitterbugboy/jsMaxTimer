/**
 * Created by Jakob Hjelmer Nielsen - Frontend freelancer http://frontend-freelancer.com on 23/06/2015.
 *
 * Example of usage:
 * var timer = new Timer(function () {}, 300);
 * timer.start(true);
 * var handleResize = function () {
    //triggers the function passed to the constructor!
 * timer.listen();
 * };
 *
 * //some eventHandler
 *  addEvents(window, "resize", handleResize);
 */


module.exports = (function _Timer() {
  "use strict";
  var Timer = function (func, delay) {
    this._timeOut = null;
    this._delay = delay;
    this._func = func;
    this._oldDate = null;

  };

  Timer.prototype._start = function () {
    if (!this._timeOut) {
      this._timeOut = window.setTimeout(this._func, this._delay);
    }
    else {
      throw new Error("start method can only be called once without using stop before");
    }
  };

  Timer.prototype.start = function (callBefore) {
    if (callBefore) {
      this._func();
    }
    else {
      this._start();
    }
  };
  Timer.prototype.force = function () {
    this._func();

  };

  Timer.prototype.stop = function () {
    if (this._timeOut) {
      window.clearTimeout(this._timeOut);
    }
    this._timeOut = null;
  };

  Timer.prototype.listen = function () {
    this.stop();
    this._start();
  };
  return Timer;
}());