(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@tsparticles/engine/browser/Utils/LogUtils.js
  function setLogger(logger) {
    if (logger.debug) {
      _logger.debug = wrap(logger.debug);
    }
    if (logger.error) {
      _logger.error = wrap(logger.error);
    }
    if (logger.info) {
      _logger.info = wrap(logger.info);
    }
    if (logger.log) {
      _logger.log = wrap(logger.log);
    }
    if (logger.trace) {
      _logger.trace = wrap(logger.trace);
    }
    if (logger.verbose) {
      _logger.verbose = wrap(logger.verbose);
    }
    if (logger.warning) {
      _logger.warning = wrap(logger.warning);
    }
  }
  function getLogger() {
    return _logger;
  }
  var errorPrefix, codedErrorPattern, fullMatchIndex, codeIndex, wrap, _logger;
  var init_LogUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/LogUtils.js"() {
      errorPrefix = "tsParticles - Error";
      codedErrorPattern = /^\[tsParticles Error (TSP-\d+)\]\s*/;
      fullMatchIndex = 0;
      codeIndex = 1;
      wrap = (fn) => (...args) => {
        fn(...args);
      };
      _logger = {
        debug: wrap(console.debug),
        error: (message, ...optionalParams) => {
          if (typeof message === "string") {
            const match = codedErrorPattern.exec(message);
            if (match?.[codeIndex]) {
              console.error(`tsParticles - ${match[codeIndex]} - ${message.slice(match[fullMatchIndex].length)}`, ...optionalParams);
              return;
            }
          }
          console.error(`${errorPrefix} - ${message}`, ...optionalParams);
        },
        info: wrap(console.info),
        log: wrap(console.log),
        trace: wrap(console.trace),
        verbose: wrap(console.log),
        warning: wrap(console.warn)
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js
  var MoveDirection;
  var init_MoveDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js"() {
      (function(MoveDirection2) {
        MoveDirection2["bottom"] = "bottom";
        MoveDirection2["bottomLeft"] = "bottom-left";
        MoveDirection2["bottomRight"] = "bottom-right";
        MoveDirection2["left"] = "left";
        MoveDirection2["none"] = "none";
        MoveDirection2["right"] = "right";
        MoveDirection2["top"] = "top";
        MoveDirection2["topLeft"] = "top-left";
        MoveDirection2["topRight"] = "top-right";
        MoveDirection2["outside"] = "outside";
        MoveDirection2["inside"] = "inside";
      })(MoveDirection || (MoveDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js
  var generatedAttribute, fullPercent, defaultCompositeValue, resizeEvent, visibilityChangeEvent, percentDenominator, half, millisecondsToSeconds, originPoint, defaultTransform, randomColorValue, double, doublePI, defaultFps, defaultAlpha, generatedTrue, generatedFalse, canvasTag, defaultRetryCount, squareExp, spatialHashGridCellSize, defaultRemoveQuantity, defaultRatio, defaultReduceFactor, inverseFactorNumerator, rgbMax, hMax, sMax, lMax, hMin, sMin, hPhase, empty, quarter, threeQuarter, minVelocity, minDistance, minRadius, defaultTransformValue, minimumSize, zIndexFactorOffset, defaultOpacity, removeDeleteCount, removeMinIndex, defaultFpsLimit, minFpsLimit, canvasFirstIndex, loadRandomFactor, loadMinIndex, one, none, decayOffset, tryCountIncrement, minZ, minLimit, countOffset, minCount, minIndex, lengthOffset, defaultDensityFactor, deleteCount, defaultAngle, identity, minStrokeWidth, lFactor, lMin, maxNits, triple, sextuple, sNormalizedOffset, phaseNumerator, defaultRgbMin, defaultVelocity, defaultLoops, defaultTime, defaultZoom;
  var init_Constants = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js"() {
      generatedAttribute = "generated";
      fullPercent = "100%";
      defaultCompositeValue = "source-over";
      resizeEvent = "resize";
      visibilityChangeEvent = "visibilitychange";
      percentDenominator = 100;
      half = 0.5;
      millisecondsToSeconds = 1e3;
      originPoint = {
        x: 0,
        y: 0,
        z: 0
      };
      defaultTransform = {
        a: 1,
        b: 0,
        c: 0,
        d: 1
      };
      randomColorValue = "random";
      double = 2;
      doublePI = Math.PI * double;
      defaultFps = 60;
      defaultAlpha = 1;
      generatedTrue = "true";
      generatedFalse = "false";
      canvasTag = "canvas";
      defaultRetryCount = 0;
      squareExp = 2;
      spatialHashGridCellSize = 100;
      defaultRemoveQuantity = 1;
      defaultRatio = 1;
      defaultReduceFactor = 1;
      inverseFactorNumerator = 1;
      rgbMax = 255;
      hMax = 360;
      sMax = 100;
      lMax = 100;
      hMin = 0;
      sMin = 0;
      hPhase = 60;
      empty = 0;
      quarter = 0.25;
      threeQuarter = half + quarter;
      minVelocity = 0;
      minDistance = 0;
      minRadius = 0;
      defaultTransformValue = 1;
      minimumSize = 0;
      zIndexFactorOffset = 1;
      defaultOpacity = 1;
      removeDeleteCount = 1;
      removeMinIndex = 0;
      defaultFpsLimit = 120;
      minFpsLimit = 0;
      canvasFirstIndex = 0;
      loadRandomFactor = 1e4;
      loadMinIndex = 0;
      one = 1;
      none = 0;
      decayOffset = 1;
      tryCountIncrement = 1;
      minZ = 0;
      minLimit = 0;
      countOffset = 1;
      minCount = 0;
      minIndex = 0;
      lengthOffset = 1;
      defaultDensityFactor = 1;
      deleteCount = 1;
      defaultAngle = 0;
      identity = 1;
      minStrokeWidth = 0;
      lFactor = 1;
      lMin = 0;
      maxNits = 400;
      triple = 3;
      sextuple = 6;
      sNormalizedOffset = 1;
      phaseNumerator = 1;
      defaultRgbMin = 0;
      defaultVelocity = 0;
      defaultLoops = 0;
      defaultTime = 0;
      defaultZoom = 1;
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js
  function getZ(source) {
    return "z" in source ? source.z : originPoint.z;
  }
  var Vector3d, Vector;
  var init_Vectors = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js"() {
      init_Constants();
      Vector3d = class _Vector3d {
        x;
        y;
        z;
        constructor(x = originPoint.x, y = originPoint.y, z = originPoint.z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        static get origin() {
          return _Vector3d.create(originPoint.x, originPoint.y, originPoint.z);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(angle) {
          this.#updateFromAngle(angle, this.length);
        }
        get length() {
          return Math.sqrt(this.getLengthSq());
        }
        set length(length) {
          this.#updateFromAngle(this.angle, length);
        }
        static clone(source) {
          return _Vector3d.create(source.x, source.y, getZ(source));
        }
        static create(x, y, z) {
          if (typeof x === "number") {
            return new _Vector3d(x, y ?? originPoint.y, z ?? originPoint.z);
          }
          return new _Vector3d(x.x, x.y, getZ(x));
        }
        add(v) {
          return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + getZ(v));
        }
        addTo(v) {
          this.x += v.x;
          this.y += v.y;
          this.z += getZ(v);
        }
        copy() {
          return _Vector3d.clone(this);
        }
        div(n2) {
          return _Vector3d.create(this.x / n2, this.y / n2, this.z / n2);
        }
        getLengthSq() {
          return this.x ** squareExp + this.y ** squareExp;
        }
        mult(n2) {
          return _Vector3d.create(this.x * n2, this.y * n2, this.z * n2);
        }
        multTo(n2) {
          this.x *= n2;
          this.y *= n2;
          this.z *= n2;
        }
        normalize() {
          const length = this.length;
          if (length !== none) {
            this.multTo(inverseFactorNumerator / length);
          }
        }
        rotate(angle) {
          return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), originPoint.z);
        }
        setTo(c) {
          this.x = c.x;
          this.y = c.y;
          this.z = getZ(c);
        }
        sub(v) {
          return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - getZ(v));
        }
        subFrom(v) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= getZ(v);
        }
        #updateFromAngle(angle, length) {
          this.x = Math.cos(angle) * length;
          this.y = Math.sin(angle) * length;
        }
      };
      Vector = class _Vector extends Vector3d {
        constructor(x = originPoint.x, y = originPoint.y) {
          super(x, y, originPoint.z);
        }
        static get origin() {
          return _Vector.create(originPoint.x, originPoint.y);
        }
        static clone(source) {
          return _Vector.create(source.x, source.y);
        }
        static create(x, y) {
          if (typeof x === "number") {
            return new _Vector(x, y ?? originPoint.y);
          }
          return new _Vector(x.x, x.y);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isEnumValue(enumObject, arg) {
    return Object.values(enumObject).some((enumValue) => enumValue === arg);
  }
  function toEnumValue(enumObject, arg, defaultValue) {
    return isEnumValue(enumObject, arg) ? arg : defaultValue;
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function isNull(arg) {
    return arg === null || arg === void 0;
  }
  var init_TypeUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js"() {
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/MathUtils.js
  function setRandom(rnd = Math.random) {
    _random = rnd;
  }
  function getRandomFn() {
    return _random;
  }
  function getRandom() {
    const min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
  }
  function getRandomInRange(min, max) {
    return getRandom() * (max - min) + min;
  }
  function animate(fn) {
    return _animationLoop.nextFrame(fn);
  }
  function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
  }
  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  function randomInRangeValue(r) {
    const max = getRangeMax(r), minOffset = 0;
    let min = getRangeMin(r);
    if (max === min) {
      min = minOffset;
    }
    return getRandomInRange(min, max);
  }
  function getRangeValue(value) {
    return isNumber(value) ? value : randomInRangeValue(value);
  }
  function getRangeMin(value) {
    return isNumber(value) ? value : value.min;
  }
  function getRangeMax(value) {
    return isNumber(value) ? value : value.max;
  }
  function setRangeValue(source, value) {
    if (source === value || value === void 0 && isNumber(source)) {
      return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== void 0 ? {
      min: Math.min(min, value),
      max: Math.max(max, value)
    } : setRangeValue(min, max);
  }
  function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return { dx, dy, distance: Math.hypot(dx, dy) };
  }
  function getDistanceSq(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return dx * dx + dy * dy;
  }
  function getDistance(pointA, pointB) {
    return Math.sqrt(getDistanceSq(pointA, pointB));
  }
  function checkDistance(pointA, pointB, distance) {
    return getDistanceSq(pointA, pointB) <= distance * distance;
  }
  function degToRad(degrees) {
    return degrees * degToRadFactor;
  }
  function getParticleDirectionAngle(direction, position, center) {
    if (isNumber(direction)) {
      return degToRad(direction);
    }
    switch (direction) {
      case MoveDirection.top:
        return -Math.PI * half;
      case MoveDirection.topRight:
        return -Math.PI * quarter;
      case MoveDirection.right:
        return empty;
      case MoveDirection.bottomRight:
        return Math.PI * quarter;
      case MoveDirection.bottom:
        return Math.PI * half;
      case MoveDirection.bottomLeft:
        return Math.PI * threeQuarter;
      case MoveDirection.left:
        return Math.PI;
      case MoveDirection.topLeft:
        return -Math.PI * threeQuarter;
      case MoveDirection.inside:
        return Math.atan2(center.y - position.y, center.x - position.x);
      case MoveDirection.outside:
        return Math.atan2(position.y - center.y, position.x - center.x);
      default:
        return getRandom() * doublePI;
    }
  }
  function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
  }
  function calcPositionOrRandomFromSize(data) {
    return {
      x: (data.position?.x ?? getRandom() * percentDenominator) * data.size.width / percentDenominator,
      y: (data.position?.y ?? getRandom() * percentDenominator) * data.size.height / percentDenominator
    };
  }
  function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
      x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
      y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
    };
    return calcPositionOrRandomFromSize({ size: data.size, position });
  }
  function calcExactPositionOrRandomFromSize(data) {
    const { position, size } = data;
    return {
      x: position?.x ?? getRandom() * size.width,
      y: position?.y ?? getRandom() * size.height
    };
  }
  function parseAlpha(input) {
    if (!input) {
      return defaultAlpha;
    }
    return input.endsWith("%") ? Number.parseFloat(input) / percentDenominator : Number.parseFloat(input);
  }
  var piDeg, degToRadFactor, _random, _animationLoop;
  var init_MathUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/MathUtils.js"() {
      init_MoveDirection();
      init_Constants();
      init_Vectors();
      init_TypeUtils();
      piDeg = 180;
      degToRadFactor = Math.PI / piDeg;
      _random = Math.random;
      _animationLoop = {
        nextFrame: (cb) => requestAnimationFrame(cb),
        cancel: (idx) => {
          cancelAnimationFrame(idx);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorCodes.js
  var ErrorCodes;
  var init_ErrorCodes = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorCodes.js"() {
      ErrorCodes = {
        engineVersionMismatch: "TSP-1001",
        particlePositionNotFound: "TSP-1002",
        pluginRegisterAfterLoad: "TSP-1003",
        offscreenCanvasUnsupported: "TSP-1101",
        offscreenCanvasTransferFailed: "TSP-1102",
        hdrEnableInvalid: "TSP-1201",
        hdrModeInvalid: "TSP-1202",
        hdrPeakNitsInvalid: "TSP-1203"
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorMessages.js
  var messages;
  var init_ErrorMessages = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorMessages.js"() {
      init_ErrorCodes();
      messages = {
        [ErrorCodes.engineVersionMismatch]: "The tsParticles version is different from the loaded plugins version. Engine version: {0}. Plugin version: {1}",
        [ErrorCodes.particlePositionNotFound]: "a valid position cannot be found for particle",
        [ErrorCodes.pluginRegisterAfterLoad]: "Register plugins can only be done before calling tsParticles.load()",
        [ErrorCodes.offscreenCanvasUnsupported]: "OffscreenCanvas is required but not supported by this browser",
        [ErrorCodes.offscreenCanvasTransferFailed]: "OffscreenCanvas transfer failed",
        [ErrorCodes.hdrEnableInvalid]: 'Invalid HDR "enable" value: expected a boolean, got "{0}"',
        [ErrorCodes.hdrModeInvalid]: 'Invalid HDR "mode" value: expected one of {0}, got "{1}"',
        [ErrorCodes.hdrPeakNitsInvalid]: 'Invalid HDR "peakNits" value: expected a positive number, got "{0}"'
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorUtils.js
  function addErrorMessages(extraMessages) {
    if (typeof process !== "undefined" && false) {
      return;
    }
    const catalog = ensureRegisteredMessages();
    for (const [code, message] of Object.entries(extraMessages)) {
      if (message !== void 0) {
        catalog.set(code, message);
      }
    }
  }
  function getErrorMessage(code, ...args) {
    if (typeof process !== "undefined" && false) {
      return `[tsParticles Error ${code}] https://particles.js.org/errors/#${code}`;
    }
    const template = ensureRegisteredMessages().get(code) ?? `Unknown error code ${code}`;
    return format(template, args);
  }
  var registeredMessages, ensureRegisteredMessages, toStringValue, format;
  var init_ErrorUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorUtils.js"() {
      init_ErrorMessages();
      init_ErrorCodes();
      ensureRegisteredMessages = () => {
        registeredMessages ??= new Map(Object.entries(messages));
        return registeredMessages;
      };
      toStringValue = (value) => String(value);
      format = (template, args) => {
        return template.replace(/\{(\d+)\}/g, (match, index) => {
          const arg = args[Number(index)];
          return arg === void 0 ? match : toStringValue(arg);
        });
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js
  var OutModeDirection;
  var init_OutModeDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js"() {
      (function(OutModeDirection2) {
        OutModeDirection2["bottom"] = "bottom";
        OutModeDirection2["left"] = "left";
        OutModeDirection2["right"] = "right";
        OutModeDirection2["top"] = "top";
      })(OutModeDirection || (OutModeDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js
  var PixelMode;
  var init_PixelMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js"() {
      (function(PixelMode2) {
        PixelMode2["precise"] = "precise";
        PixelMode2["percent"] = "percent";
      })(PixelMode || (PixelMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/Utils.js
  function isForbiddenKey(key) {
    return key === "__proto__" || key === "constructor" || key === "prototype";
  }
  function hasMatchMedia() {
    return typeof matchMedia !== "undefined";
  }
  function safeDocument() {
    return globalThis.document;
  }
  function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
      return;
    }
    return matchMedia(query);
  }
  function safeMutationObserver(callback) {
    if (typeof MutationObserver === "undefined") {
      return;
    }
    return new MutationObserver(callback);
  }
  function isInArray(value, array) {
    return value === array || isArray(array) && array.includes(value);
  }
  function itemFromArray(array, index, useIndex = true) {
    return array[index !== void 0 && useIndex ? index % array.length : Math.floor(getRandom() * array.length)];
  }
  function isPointInside(point, size, offset, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
  }
  function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === OutModeDirection.bottom) {
      inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.left)) {
      inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.right)) {
      inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === OutModeDirection.top)) {
      inside = bounds.bottom > offset.y;
    }
    return inside;
  }
  function calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }
  function deepExtend(destination, ...sources) {
    for (const source of sources) {
      if (isNull(source)) {
        continue;
      }
      if (!isObject(source)) {
        destination = source;
        continue;
      }
      if (Array.isArray(source)) {
        if (!Array.isArray(destination)) {
          destination = [];
        }
      } else if (!isObject(destination) || Array.isArray(destination)) {
        destination = /* @__PURE__ */ Object.create(null);
      }
      const sourceKeys = Object.keys(source), hasNested = sourceKeys.some((k) => {
        const v = source[k];
        return isObject(v) || Array.isArray(v);
      });
      if (!hasNested) {
        const sourceDict = source, destDict = destination;
        for (const key of sourceKeys) {
          if (isForbiddenKey(key)) {
            continue;
          }
          const v = sourceDict[key];
          if (v !== void 0) {
            destDict[key] = v;
          }
        }
        continue;
      }
      for (const key of sourceKeys) {
        if (isForbiddenKey(key)) {
          continue;
        }
        const sourceDict = source, destDict = destination, value = sourceDict[key];
        destDict[key] = Array.isArray(value) ? value.map((v) => deepExtend(void 0, v)) : deepExtend(destDict[key], value);
      }
    }
    return destination;
  }
  function executeOnSingleOrMultiple(obj, callback) {
    const defaultIndex2 = 0;
    return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, defaultIndex2);
  }
  function itemFromSingleOrMultiple(obj, index, useIndex) {
    return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
  }
  function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === PixelMode.percent;
    if (!isPercent) {
      const { mode: _, ...rest } = positionOrSize;
      return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
      return {
        x: positionOrSize.x / percentDenominator * canvasSize.width,
        y: positionOrSize.y / percentDenominator * canvasSize.height
      };
    } else {
      return {
        width: positionOrSize.width / percentDenominator * canvasSize.width,
        height: positionOrSize.height / percentDenominator * canvasSize.height
      };
    }
  }
  function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
  }
  function cloneStyle(style) {
    const clonedStyle = safeDocument().createElement("div").style;
    for (const key in style) {
      const styleKey = style[key];
      if (!(key in style) || isNull(styleKey)) {
        continue;
      }
      const styleValue = style.getPropertyValue?.(styleKey);
      if (!styleValue) {
        continue;
      }
      const stylePriority = style.getPropertyPriority?.(styleKey);
      if (stylePriority) {
        clonedStyle.setProperty(styleKey, styleValue, stylePriority);
      } else {
        clonedStyle.setProperty(styleKey, styleValue);
      }
    }
    return clonedStyle;
  }
  function getFullScreenStyle(zIndex) {
    if (_cachedZIndex !== zIndex || !_cachedStyle) {
      _cachedZIndex = zIndex;
      const fullScreenStyle = safeDocument().createElement("div").style, radix = 10, style = {
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        borderWidth: "0",
        position: "fixed",
        zIndex: zIndex.toString(radix),
        "z-index": zIndex.toString(radix),
        top: "0",
        left: "0",
        "pointer-events": "none"
      };
      for (const key in style) {
        const value = style[key];
        if (value === void 0) {
          continue;
        }
        fullScreenStyle.setProperty(key, value);
      }
      _cachedStyle = fullScreenStyle;
    }
    return _cachedStyle;
  }
  function manageListener(element, event, handler, add, options) {
    if (add) {
      let addOptions = { passive: true };
      if (isBoolean(options)) {
        addOptions.capture = options;
      } else if (options !== void 0) {
        addOptions = options;
      }
      element.addEventListener(event, handler, addOptions);
    } else {
      const removeOptions = options;
      element.removeEventListener(event, handler, removeOptions);
    }
  }
  async function getItemsFromInitializer(container, initializers) {
    return await Promise.all([...initializers.values()].map((t) => t(container)));
  }
  async function getItemMapFromInitializer(container, initializers) {
    const entries = await Promise.all([...initializers.entries()].map(([key, initializer]) => initializer(container).then((item) => [key, item])));
    return new Map(entries);
  }
  async function getDataFromUrl(data) {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
      return data.fallback;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const current = await response.json();
        if (isSourceOptionsValue(current)) {
          return current;
        }
        getLogger().error("invalid configuration data while retrieving config file");
      } else {
        getLogger().error(`${response.status.toString()} while retrieving config file`);
      }
    } catch (error) {
      getLogger().error(`error while retrieving config file: ${error}`);
    }
    return data.fallback;
  }
  function isSourceOptionsValue(value) {
    if (isArray(value)) {
      return value.every((entry) => isObject(entry) && !isArray(entry));
    }
    return isObject(value) && !isArray(value);
  }
  function getCanvasFromContainer(domContainer) {
    let canvasEl;
    const documentSafe = safeDocument(), isCanvas = domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag;
    if (isCanvas) {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] ??= generatedFalse;
      if (canvasEl.dataset[generatedAttribute] === generatedTrue) {
        canvasEl.style.width ||= fullPercent;
        canvasEl.style.height ||= fullPercent;
        canvasEl.style.pointerEvents = "none";
        canvasEl.style.setProperty("pointer-events", "none");
      }
    } else {
      const existingCanvases = domContainer.getElementsByTagName(canvasTag), foundCanvas = existingCanvases.item(canvasFirstIndex);
      if (foundCanvas) {
        canvasEl = foundCanvas;
        canvasEl.dataset[generatedAttribute] = generatedFalse;
      } else {
        canvasEl = documentSafe.createElement(canvasTag);
        canvasEl.dataset[generatedAttribute] = generatedTrue;
        domContainer.appendChild(canvasEl);
      }
      canvasEl.style.width ||= fullPercent;
      canvasEl.style.height ||= fullPercent;
      canvasEl.style.pointerEvents = "none";
      canvasEl.style.setProperty("pointer-events", "none");
    }
    return canvasEl;
  }
  function getDomContainer(id, source) {
    const documentSafe = safeDocument();
    let domContainer = source ?? documentSafe.getElementById(id);
    if (domContainer) {
      return domContainer;
    }
    domContainer = documentSafe.createElement("canvas");
    domContainer.id = id;
    domContainer.dataset[generatedAttribute] = generatedTrue;
    documentSafe.body.append(domContainer);
    return domContainer;
  }
  var _cachedZIndex, _cachedStyle;
  var init_Utils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/Utils.js"() {
      init_Constants();
      init_MathUtils();
      init_TypeUtils();
      init_OutModeDirection();
      init_PixelMode();
      init_Vectors();
      init_LogUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
  var EventDispatcher;
  var init_EventDispatcher = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js"() {
      init_Constants();
      EventDispatcher = class {
        #listeners;
        constructor() {
          this.#listeners = /* @__PURE__ */ new Map();
        }
        addEventListener(type, listener) {
          this.removeEventListener(type, listener);
          const arr = this.#listeners.get(type);
          this.#listeners.set(type, arr ? [...arr, listener] : [listener]);
        }
        dispatchEvent(type, args) {
          const listeners = this.#listeners.get(type);
          listeners?.forEach((handler) => {
            handler(args);
          });
        }
        hasEventListener(type) {
          return !!this.#listeners.get(type);
        }
        removeAllEventListeners(type) {
          if (!type) {
            this.#listeners = /* @__PURE__ */ new Map();
          } else {
            this.#listeners.delete(type);
          }
        }
        removeEventListener(type, listener) {
          const arr = this.#listeners.get(type);
          if (!arr) {
            return;
          }
          const length = arr.length, idx = arr.indexOf(listener);
          if (idx < minIndex) {
            return;
          }
          if (length === deleteCount) {
            this.#listeners.delete(type);
          } else {
            this.#listeners.set(type, [...arr.slice(minIndex, idx), ...arr.slice(idx + deleteCount)]);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js
  var EventType;
  var init_EventType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js"() {
      (function(EventType2) {
        EventType2["configAdded"] = "configAdded";
        EventType2["containerInit"] = "containerInit";
        EventType2["particlesSetup"] = "particlesSetup";
        EventType2["containerStarted"] = "containerStarted";
        EventType2["containerStopped"] = "containerStopped";
        EventType2["containerDestroyed"] = "containerDestroyed";
        EventType2["containerPaused"] = "containerPaused";
        EventType2["containerPlay"] = "containerPlay";
        EventType2["containerBuilt"] = "containerBuilt";
        EventType2["particleAdded"] = "particleAdded";
        EventType2["particleDestroyed"] = "particleDestroyed";
        EventType2["particleRemoved"] = "particleRemoved";
      })(EventType || (EventType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js
  var PluginManager;
  var init_PluginManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js"() {
      init_ErrorUtils();
      init_EventType();
      PluginManager = class {
        colorManagers = /* @__PURE__ */ new Map();
        easingFunctions = /* @__PURE__ */ new Map();
        initializers = {
          effects: /* @__PURE__ */ new Map(),
          shapes: /* @__PURE__ */ new Map(),
          updaters: /* @__PURE__ */ new Map()
        };
        palettes = /* @__PURE__ */ new Map();
        plugins = [];
        presets = /* @__PURE__ */ new Map();
        #allLoadersSet = /* @__PURE__ */ new Set();
        #configs = /* @__PURE__ */ new Map();
        #engine;
        #executedSet = /* @__PURE__ */ new Set();
        #inFlightLoaders = /* @__PURE__ */ new Set();
        #initialized = false;
        #initPromise;
        #isRunningLoaders = false;
        #loadPromises = /* @__PURE__ */ new Set();
        constructor(engine) {
          this.#engine = engine;
        }
        get configs() {
          const res = {};
          for (const [name, config] of this.#configs) {
            res[name] = config;
          }
          return res;
        }
        get initialized() {
          return this.#initialized;
        }
        addColorManager(name, manager) {
          if (this.#initialized) {
            return;
          }
          this.colorManagers.set(name, manager);
        }
        addConfig(config) {
          if (this.#initialized) {
            return;
          }
          const key = config.key ?? config.name ?? "default";
          this.#configs.set(key, config);
          this.#engine.dispatchEvent(EventType.configAdded, { data: { name: key, config } });
        }
        addEasing(name, easing) {
          if (this.#initialized) {
            return;
          }
          if (this.easingFunctions.get(name)) {
            return;
          }
          this.easingFunctions.set(name, easing);
        }
        addEffect(effect, drawer) {
          if (this.#initialized) {
            return;
          }
          this.initializers.effects.set(effect, drawer);
        }
        addPalette(name, palette) {
          if (this.#initialized) {
            return;
          }
          this.palettes.set(name, palette);
        }
        addParticleUpdater(name, updaterInitializer) {
          if (this.#initialized) {
            return;
          }
          this.initializers.updaters.set(name, updaterInitializer);
        }
        addPlugin(plugin) {
          if (this.#initialized) {
            return;
          }
          if (this.getPlugin(plugin.id)) {
            return;
          }
          this.plugins.push(plugin);
        }
        addPreset(preset, options, override = false) {
          if (this.#initialized) {
            return;
          }
          if (!(override || !this.getPreset(preset))) {
            return;
          }
          this.presets.set(preset, options);
        }
        addShape(shapes, drawer) {
          if (this.#initialized) {
            return;
          }
          for (const shape of shapes) {
            this.initializers.shapes.set(shape, drawer);
          }
        }
        getEasing(name) {
          return this.easingFunctions.get(name) ?? ((value) => value);
        }
        getPalette(name) {
          return this.palettes.get(name);
        }
        getPlugin(plugin) {
          return this.plugins.find((t) => t.id === plugin);
        }
        getPreset(preset) {
          return this.presets.get(preset);
        }
        async init() {
          if (this.#initialized) {
            return;
          }
          if (this.#initPromise) {
            return this.#initPromise;
          }
          this.#isRunningLoaders = true;
          this.#allLoadersSet = new Set(this.#loadPromises);
          this.#initPromise = (async () => {
            try {
              while (this.#inFlightLoaders.size > 0 || [...this.#allLoadersSet].some((loader) => !this.#executedSet.has(loader))) {
                for (const loader of this.#allLoadersSet) {
                  await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
                }
                const inFlightLoaders = [...this.#inFlightLoaders];
                if (inFlightLoaders.length) {
                  await Promise.all(inFlightLoaders);
                }
              }
              this.#loadPromises.clear();
              this.#initialized = true;
            } finally {
              this.#isRunningLoaders = false;
              this.#initPromise = void 0;
            }
          })();
          return this.#initPromise;
        }
        async register(...loaders) {
          if (this.#initialized) {
            throw new Error(getErrorMessage(ErrorCodes.pluginRegisterAfterLoad));
          }
          for (const loader of loaders) {
            if (this.#isRunningLoaders) {
              this.#loadPromises.add(loader);
              await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
            } else {
              this.#loadPromises.add(loader);
            }
          }
        }
        async #runLoader(loader, executed, allLoaders) {
          if (executed.has(loader)) {
            return;
          }
          executed.add(loader);
          allLoaders.add(loader);
          const loaderPromise = (async () => loader(this.#engine))();
          this.#inFlightLoaders.add(loaderPromise);
          try {
            await loaderPromise;
          } catch (error) {
            executed.delete(loader);
            throw error;
          } finally {
            this.#inFlightLoaders.delete(loaderPromise);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js
  var AlterType;
  var init_AlterType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js"() {
      (function(AlterType2) {
        AlterType2["darken"] = "darken";
        AlterType2["enlighten"] = "enlighten";
      })(AlterType || (AlterType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js
  var AnimationStatus;
  var init_AnimationStatus = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js"() {
      (function(AnimationStatus2) {
        AnimationStatus2["increasing"] = "increasing";
        AnimationStatus2["decreasing"] = "decreasing";
      })(AnimationStatus || (AnimationStatus = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/HdrMode.js
  var HdrMode;
  var init_HdrMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/HdrMode.js"() {
      (function(HdrMode2) {
        HdrMode2["standard"] = "standard";
        HdrMode2["natural"] = "natural";
        HdrMode2["vivid"] = "vivid";
        HdrMode2["cinematic"] = "cinematic";
        HdrMode2["dynamic"] = "dynamic";
      })(HdrMode || (HdrMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js
  function getCachedStyle(key, generator) {
    let cached = styleCache.get(key);
    if (!cached) {
      cached = generator();
      if (styleCache.size > maxStyleCacheSize) {
        styleCache.clear();
      }
      styleCache.set(key, cached);
    }
    return cached;
  }
  function acesFilmic(x) {
    return clamp(x * (acesA * x + acesB) / (x * (acesC * x + acesD) + acesE), none, one);
  }
  function applyHdrModeAdjustments(r, g, b, mode, maxChannel) {
    switch (mode) {
      case HdrMode.vivid: {
        const avg = (r + g + b) / channelCount;
        return {
          b: clamp(clamp(avg + (b - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel),
          g: clamp(clamp(avg + (g - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel),
          r: clamp(clamp(avg + (r - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel)
        };
      }
      case HdrMode.cinematic: {
        const tempR = r * temperatureR, tempB = b * temperatureB, avg = (tempR + g + tempB) / channelCount;
        return {
          b: clamp(avg + (tempB - avg) * contrastFactor, none, maxChannel),
          g: clamp(avg + (g - avg) * contrastFactor, none, maxChannel),
          r: clamp(avg + (tempR - avg) * contrastFactor, none, maxChannel)
        };
      }
      case HdrMode.dynamic: {
        const luminance = luminanceR * r + luminanceG * g + luminanceB * b, vividWeight = Math.min(one, luminance * dynamicLuminanceFactor), naturalWeight = one - vividWeight, avg = (r + g + b) / channelCount, vividR = clamp(avg + (r - avg) * saturationBoost, none, maxChannel) * lightnessBoost, vividG = clamp(avg + (g - avg) * saturationBoost, none, maxChannel) * lightnessBoost, vividB = clamp(avg + (b - avg) * saturationBoost, none, maxChannel) * lightnessBoost;
        return {
          b: clamp(b * naturalWeight + vividB * vividWeight, none, maxChannel),
          g: clamp(g * naturalWeight + vividG * vividWeight, none, maxChannel),
          r: clamp(r * naturalWeight + vividR * vividWeight, none, maxChannel)
        };
      }
      case HdrMode.standard:
        return { b, g, r };
      case HdrMode.natural:
      default:
        return { b, g, r };
    }
  }
  function stringToRgba(pluginManager, input) {
    if (!input) {
      return;
    }
    for (const manager of pluginManager.colorManagers.values()) {
      if (manager.accepts(input)) {
        return manager.parseString(input);
      }
    }
    return void 0;
  }
  function rangeColorToRgb(pluginManager, input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return colorToRgb(pluginManager, color.value, index, useIndex);
    }
    if (isArray(color.value)) {
      const value = itemFromArray(color.value, index, useIndex);
      if (!value) {
        return;
      }
      return rangeColorToRgb(pluginManager, {
        value
      });
    }
    for (const manager of pluginManager.colorManagers.values()) {
      const res = manager.handleRangeColor(color);
      if (res) {
        return res;
      }
    }
    return void 0;
  }
  function colorToRgb(pluginManager, input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(pluginManager, color.value);
    }
    if (isArray(color.value)) {
      const value = itemFromArray(color.value, index, useIndex);
      if (!value) {
        return;
      }
      return colorToRgb(pluginManager, {
        value
      });
    }
    for (const manager of pluginManager.colorManagers.values()) {
      const res = manager.handleColor(color);
      if (res) {
        return res;
      }
    }
    return void 0;
  }
  function rangeColorToHsl(pluginManager, color, index, useIndex = true) {
    const rgb = rangeColorToRgb(pluginManager, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : void 0;
  }
  function rgbToHsl(color) {
    const r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
      h: hMin,
      l: (max + min) * half,
      s: sMin
    };
    if (max !== min) {
      res.s = res.l < half ? (max - min) / (max + min) : (max - min) / (double - max - min);
      if (r1 === max) {
        res.h = (g1 - b1) / (max - min);
      } else if (g1 === max) {
        res.h = double + (b1 - r1) / (max - min);
      } else {
        res.h = double * double + (r1 - g1) / (max - min);
      }
    }
    res.l *= lMax;
    res.s *= sMax;
    res.h *= hPhase;
    if (res.h < hMin) {
      res.h += hMax;
    }
    if (res.h >= hMax) {
      res.h -= hMax;
    }
    return res;
  }
  function stringToRgb(pluginManager, input) {
    return stringToRgba(pluginManager, input);
  }
  function hslChannel(temp1, temp2, temp3) {
    const temp3Min = 0, temp3Max = 1;
    if (temp3 < temp3Min) {
      temp3++;
    }
    if (temp3 > temp3Max) {
      temp3--;
    }
    if (temp3 * sextuple < temp3Max) {
      return temp1 + (temp2 - temp1) * sextuple * temp3;
    }
    if (temp3 * double < temp3Max) {
      return temp2;
    }
    if (temp3 * triple < temp3Max * double) {
      const temp3Offset = double / triple;
      return temp1 + (temp2 - temp1) * (temp3Offset - temp3) * sextuple;
    }
    return temp1;
  }
  function hslToRgb(hsl) {
    const h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax;
    if (s === sMin) {
      const grayscaleValue = Math.round(lNormalized * rgbMax);
      return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
    }
    const temp2 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp1 = double * lNormalized - temp2, phaseThird = phaseNumerator / triple, red = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized + phaseThird)), green = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized)), blue = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized - phaseThird));
    return { r: Math.round(red), g: Math.round(green), b: Math.round(blue) };
  }
  function hslToRgbFloat(hsl) {
    const h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax;
    if (s === sMin) {
      const grayscaleValue = lNormalized * rgbMax;
      return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
    }
    const temp2 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp1 = double * lNormalized - temp2, phaseThird = phaseNumerator / triple, red = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized + phaseThird)), green = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized)), blue = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized - phaseThird));
    return { r: red, g: green, b: blue };
  }
  function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }
  function getRandomRgbColor(min, hdr) {
    const fixedMin = min ?? defaultRgbMin;
    if (hdr) {
      return {
        r: getRandomInRange(fixedMin, rgbMax),
        g: getRandomInRange(fixedMin, rgbMax),
        b: getRandomInRange(fixedMin, rgbMax)
      };
    }
    const fixedMax = rgbMax + identity, getRgbInRangeValue = () => Math.floor(getRandomInRange(fixedMin, fixedMax));
    return {
      b: getRgbInRangeValue(),
      g: getRgbInRangeValue(),
      r: getRgbInRangeValue()
    };
  }
  function getStyleFromRgb(color, hdr, opacity, peakNits, mode) {
    const rgbPrecision = hdr ? hdrRgbFixedPrecision : rgbFixedPrecision, op = opacity ?? defaultOpacity, key = hdr ? `rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-hdr-${op.toString()}-${(peakNits ?? maxNits).toString()}-${mode ?? HdrMode.standard}` : `rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-sdr-${op.toString()}`;
    return getCachedStyle(key, () => hdr ? getHdrStyleFromRgb(color, opacity, peakNits, mode) : getSdrStyleFromRgb(color, opacity));
  }
  function getHdrStyleFromRgb(color, opacity, peakNits = maxNits, mode = HdrMode.standard) {
    const headroom = peakNits / sdrReferenceWhiteNits, middleGray = 0.18, mapped = hdrToneMapColor(color, headroom, middleGray, mode);
    return `color(display-p3 ${mapped.r.toString()} ${mapped.g.toString()} ${mapped.b.toString()} / ${(opacity ?? defaultOpacity).toString()})`;
  }
  function hdrToneMapColor(color, headroom, middleGray, mode) {
    const rNorm = color.r / rgbMax, gNorm = color.g / rgbMax, bNorm = color.b / rgbMax;
    if (mode !== HdrMode.natural && mode !== HdrMode.vivid && mode !== HdrMode.cinematic && mode !== HdrMode.dynamic) {
      return { b: bNorm, g: gNorm, r: rNorm };
    }
    const maxChannel = Math.max(one, headroom), luminance = luminanceR * rNorm + luminanceG * gNorm + luminanceB * bNorm, mappedLuminance = hdrToneMap(luminance, headroom, middleGray), scale = luminance > none ? mappedLuminance / luminance : one;
    return applyHdrModeAdjustments(clamp(rNorm * scale, none, maxChannel), clamp(gNorm * scale, none, maxChannel), clamp(bNorm * scale, none, maxChannel), mode, maxChannel);
  }
  function hdrToneMap(normalized, headroom, middleGray) {
    if (normalized <= middleGray) {
      return acesFilmic(normalized);
    }
    const expanded = normalized + (normalized - middleGray) * (headroom - one);
    return acesFilmic(expanded);
  }
  function getSdrStyleFromRgb(color, opacity) {
    return `rgba(${color.r.toString()}, ${color.g.toString()}, ${color.b.toString()}, ${(opacity ?? defaultOpacity).toString()})`;
  }
  function getStyleFromHsl(color, hdr, opacity, peakNits, mode) {
    const hslPrecision = hdr ? hdrHslFixedPrecision : hslFixedPrecision, op = opacity ?? defaultOpacity, key = hdr ? `hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-hdr-${op.toString()}-${(peakNits ?? maxNits).toString()}-${mode ?? HdrMode.standard}` : `hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-sdr-${op.toString()}`;
    return getCachedStyle(key, () => hdr ? getStyleFromRgb(hslToRgbFloat(color), true, opacity, peakNits, mode) : `hsla(${color.h.toString()}, ${color.s.toString()}%, ${color.l.toString()}%, ${op.toString()})`);
  }
  function getHslFromAnimation(animation) {
    return animation === void 0 ? void 0 : {
      h: animation.h.value,
      s: animation.s.value,
      l: animation.l.value
    };
  }
  function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
      h: {
        enable: false,
        value: hsl.h,
        min: hMin,
        max: hMax
      },
      s: {
        enable: false,
        value: hsl.s,
        min: sMin,
        max: sMax
      },
      l: {
        enable: false,
        value: hsl.l,
        min: lMin,
        max: lMax
      }
    };
    if (animationOptions) {
      setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
      setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
      setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
  }
  function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    colorValue.min = colorAnimation.min;
    colorValue.max = colorAnimation.max;
    if (colorValue.enable) {
      colorValue.velocity = getRangeValue(colorAnimation.speed) / percentDenominator * reduceFactor;
      colorValue.decay = decayOffset - getRangeValue(colorAnimation.decay);
      colorValue.status = AnimationStatus.increasing;
      colorValue.loops = defaultLoops;
      colorValue.maxLoops = getRangeValue(colorAnimation.count);
      colorValue.time = defaultTime;
      colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
      if (!colorAnimation.sync) {
        colorValue.velocity *= getRandom();
        colorValue.value *= getRandom();
      }
      colorValue.initialValue = colorValue.value;
      colorValue.offset = setRangeValue(colorAnimation.offset);
    } else {
      colorValue.velocity = defaultVelocity;
    }
  }
  function updateColorValue(data, decrease, delta, _hdr) {
    const minLoops2 = 0, minDelay = 0, identity4 = 1, minVelocity2 = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    data.time ??= 0;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      return;
    }
    const offset = data.offset ? randomInRangeValue(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity2) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity4, max = data.max, min = data.min;
    if (!decrease || data.status === AnimationStatus.increasing) {
      data.value += velocity;
      if (data.value > max) {
        data.loops ??= 0;
        data.loops++;
        if (decrease) {
          data.status = AnimationStatus.decreasing;
        } else {
          data.value -= max;
        }
      }
    } else {
      data.value -= velocity;
      if (data.value < min) {
        data.loops ??= 0;
        data.loops++;
        data.status = AnimationStatus.increasing;
      }
    }
    if (data.velocity && decay !== identity4) {
      data.velocity *= decay;
    }
    data.value = clamp(data.value, min, max);
  }
  function updateColor(color, delta, hdr) {
    if (!color) {
      return;
    }
    const { h, s, l } = color;
    updateColorValue(h, false, delta, hdr);
    updateColorValue(s, true, delta, hdr);
    updateColorValue(l, true, delta, hdr);
  }
  function alterHsl(color, type, value) {
    return {
      h: color.h,
      s: color.s,
      l: color.l + (type === AlterType.darken ? -lFactor : lFactor) * value
    };
  }
  var styleCache, maxStyleCacheSize, rgbFixedPrecision, hslFixedPrecision, hdrRgbFixedPrecision, hdrHslFixedPrecision, sdrReferenceWhiteNits, acesA, acesB, acesC, acesD, acesE, saturationBoost, lightnessBoost, temperatureR, temperatureB, contrastFactor, luminanceR, luminanceG, luminanceB, dynamicLuminanceFactor, channelCount;
  var init_ColorUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js"() {
      init_MathUtils();
      init_Constants();
      init_TypeUtils();
      init_AlterType();
      init_AnimationStatus();
      init_HdrMode();
      init_Utils();
      styleCache = /* @__PURE__ */ new Map();
      maxStyleCacheSize = 2e3;
      rgbFixedPrecision = 2;
      hslFixedPrecision = 2;
      hdrRgbFixedPrecision = 4;
      hdrHslFixedPrecision = 4;
      sdrReferenceWhiteNits = 203;
      acesA = 2.51;
      acesB = 0.03;
      acesC = 2.43;
      acesD = 0.59;
      acesE = 0.14;
      saturationBoost = 1.15;
      lightnessBoost = 1.05;
      temperatureR = 1.05;
      temperatureB = 0.95;
      contrastFactor = 1.1;
      luminanceR = 0.2126;
      luminanceG = 0.7152;
      luminanceB = 0.0722;
      dynamicLuminanceFactor = 2;
      channelCount = 3;
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/DrawLayer.js
  var DrawLayer;
  var init_DrawLayer = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/DrawLayer.js"() {
      (function(DrawLayer2) {
        DrawLayer2[DrawLayer2["BackgroundElement"] = 0] = "BackgroundElement";
        DrawLayer2[DrawLayer2["BackgroundDraw"] = 1] = "BackgroundDraw";
        DrawLayer2[DrawLayer2["BackgroundMask"] = 2] = "BackgroundMask";
        DrawLayer2[DrawLayer2["CanvasSetup"] = 3] = "CanvasSetup";
        DrawLayer2[DrawLayer2["PluginContent"] = 4] = "PluginContent";
        DrawLayer2[DrawLayer2["Particles"] = 5] = "Particles";
        DrawLayer2[DrawLayer2["CanvasCleanup"] = 6] = "CanvasCleanup";
        DrawLayer2[DrawLayer2["Foreground"] = 7] = "Foreground";
      })(DrawLayer || (DrawLayer = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/RenderManager.js
  function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key];
    if (newValue !== void 0) {
      factor[key] = (factor[key] ?? defaultTransformValue) * newValue;
    }
  }
  var fColorIndex, sColorIndex, RenderManager;
  var init_RenderManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/RenderManager.js"() {
      init_Constants();
      init_ColorUtils();
      init_DrawLayer();
      init_LogUtils();
      fColorIndex = 0;
      sColorIndex = 1;
      RenderManager = class {
        #backgroundElement;
        #backgroundWarnings;
        #canvasClearPlugins;
        #canvasManager;
        #colorPlugins;
        #container;
        #context;
        #contextSettings;
        #drawParticlePlugins;
        #drawParticlesCleanupPlugins;
        #drawParticlesSetupPlugins;
        #layers;
        #pluginManager;
        #postDrawUpdaters;
        #preDrawUpdaters;
        #reusableColorStyles = {};
        #reusablePluginColors = [void 0, void 0];
        #reusableTransform = {};
        constructor(pluginManager, container, canvasManager) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#canvasManager = canvasManager;
          this.#context = null;
          this.#backgroundElement = null;
          this.#backgroundWarnings = /* @__PURE__ */ new Set();
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          this.#drawParticlesSetupPlugins = [];
          this.#layers = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: []
          };
        }
        get settings() {
          return this.#contextSettings;
        }
        canvasClear() {
          if (!this.#container.actualOptions.clear) {
            return;
          }
          this.draw((ctx) => {
            ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        clear() {
          const visited = /* @__PURE__ */ new Set();
          for (const plugin of this.#canvasClearPlugins) {
            visited.add(plugin);
            if (plugin.canvasClear?.() ?? false) {
              return plugin;
            }
          }
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              for (const plugin of this.#getLayerPlugins(layer)) {
                if (visited.has(plugin)) {
                  continue;
                }
                visited.add(plugin);
                if (plugin.canvasClear?.() ?? false) {
                  return plugin;
                }
              }
            }
          }
          this.canvasClear();
          return void 0;
        }
        destroy() {
          this.stop();
          this.#backgroundElement = null;
          this.#backgroundWarnings.clear();
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          this.#drawParticlesSetupPlugins = [];
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              this.#layers[layer] = [];
            }
          }
        }
        draw(cb) {
          const ctx = this.#context;
          if (!ctx) {
            return;
          }
          return cb(ctx);
        }
        drawParticle(particle, delta) {
          if (particle.spawning || particle.destroyed) {
            return;
          }
          const radius = particle.getRadius();
          if (radius <= minimumSize) {
            return;
          }
          const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor();
          let [fColor, sColor] = this.#getPluginParticleColors(particle);
          fColor ??= pfColor;
          sColor ??= psColor;
          if (!fColor && !sColor) {
            return;
          }
          const container = this.#container, zIndexOptions = particle.options.zIndex, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, { fillOpacity, opacity, strokeOpacity } = particle.getOpacity(), transform = this.#reusableTransform, colorStyles = this.#reusableColorStyles, fill = fColor ? getStyleFromHsl(fColor, container.hdr, fillOpacity * opacity, container.peakNits, container.hdrMode) : void 0, stroke = sColor ? getStyleFromHsl(sColor, container.hdr, strokeOpacity * opacity, container.peakNits, container.hdrMode) : fill;
          transform.a = transform.b = transform.c = transform.d = void 0;
          colorStyles.fill = fill;
          colorStyles.stroke = stroke;
          this.draw((context) => {
            for (const plugin of this.#drawParticlesSetupPlugins) {
              plugin.drawParticleSetup?.(context, particle, delta);
            }
            this.#applyPreDrawUpdaters(context, particle, radius, opacity, colorStyles, transform);
            this.#drawParticle({
              container,
              context,
              particle,
              delta,
              colorStyles,
              radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
              opacity,
              transform
            });
            this.#applyPostDrawUpdaters(particle);
            for (const plugin of this.#drawParticlesCleanupPlugins) {
              plugin.drawParticleCleanup?.(context, particle, delta);
            }
          });
        }
        drawParticlePlugins(particle, delta) {
          this.draw((ctx) => {
            for (const plugin of this.#drawParticlePlugins) {
              this.#drawParticlePlugin(ctx, plugin, particle, delta);
            }
          });
        }
        drawParticles(delta) {
          const { particles, actualOptions } = this.#container;
          this.clear();
          particles.update(delta);
          this.draw((ctx) => {
            const width = this.#canvasManager.size.width, height = this.#canvasManager.size.height;
            if (this.#backgroundElement) {
              try {
                ctx.drawImage(this.#backgroundElement, originPoint.x, originPoint.y, width, height);
              } catch {
                this.#warnOnce("background-element-draw-error", "Error drawing background element onto canvas");
              }
            }
            const background = actualOptions.background;
            if (background.draw) {
              try {
                background.draw(ctx, delta);
              } catch {
                this.#warnOnce("background-draw-error", "Error in background.draw callback");
              }
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) {
              plugin.canvasPaint?.();
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasSetup)) {
              plugin.drawSettingsSetup?.(ctx, delta);
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.PluginContent)) {
              plugin.draw?.(ctx, delta);
            }
            particles.drawParticles(delta);
            for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasCleanup)) {
              plugin.clearDraw?.(ctx, delta);
              plugin.drawSettingsCleanup?.(ctx, delta);
            }
          });
        }
        init() {
          this.initUpdaters();
          this.initPlugins();
          this.#resolveBackgroundElement();
          this.paint();
        }
        initPlugins() {
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesSetupPlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              this.#layers[layer] = [];
            }
          }
          this.#initPluginsArray();
        }
        initUpdaters() {
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          for (const updater of this.#container.particleUpdaters) {
            if (updater.afterDraw) {
              this.#postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
              this.#preDrawUpdaters.push(updater);
            }
          }
        }
        paint() {
          let handled = false;
          for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) {
            handled = plugin.canvasPaint?.() ?? false;
            if (handled) {
              break;
            }
          }
          if (handled) {
            return;
          }
          this.paintBase();
        }
        paintBase(baseColor) {
          this.draw((ctx) => {
            ctx.fillStyle = baseColor ?? "rgba(0,0,0,0)";
            ctx.fillRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        paintImage(image, opacity) {
          this.draw((ctx) => {
            if (!image) {
              return;
            }
            const prevAlpha = ctx.globalAlpha;
            ctx.globalAlpha = opacity;
            ctx.drawImage(image, originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
            ctx.globalAlpha = prevAlpha;
          });
        }
        setContext(context) {
          this.#context = context;
          if (this.#context) {
            this.#context.globalCompositeOperation = defaultCompositeValue;
          }
        }
        setContextSettings(settings) {
          this.#contextSettings = settings;
        }
        stop() {
          this.draw((ctx) => {
            ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        updateBackgroundElement() {
          this.#resolveBackgroundElement();
        }
        #applyPostDrawUpdaters(particle) {
          for (const updater of this.#postDrawUpdaters) {
            updater.afterDraw?.(particle);
          }
        }
        #applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform) {
          for (const updater of this.#preDrawUpdaters) {
            if (updater.getColorStyles) {
              const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
              if (fill) {
                colorStyles.fill = fill;
              }
              if (stroke) {
                colorStyles.stroke = stroke;
              }
            }
            if (updater.getTransformValues) {
              const updaterTransform = updater.getTransformValues(particle);
              for (const key in updaterTransform) {
                setTransformValue(transform, updaterTransform, key);
              }
            }
            updater.beforeDraw?.(particle);
          }
        }
        #drawAfterEffect(drawer, data) {
          if (!drawer?.drawAfter) {
            return;
          }
          const { particle } = data;
          if (!particle.effect) {
            return;
          }
          drawer.drawAfter(data);
        }
        #drawBeforeEffect(drawer, data) {
          if (!drawer?.drawBefore) {
            return;
          }
          const { particle } = data;
          if (!particle.effect) {
            return;
          }
          drawer.drawBefore(data);
        }
        #drawParticle(data) {
          const { container, context, particle, delta, colorStyles, radius, opacity, transform } = data, { effectDrawers, shapeDrawers } = container, pos = particle.getPosition(), transformData = particle.getTransformData(transform), drawScale = defaultZoom, drawPosition = {
            x: pos.x,
            y: pos.y
          };
          context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
          if (colorStyles.fill) {
            context.fillStyle = colorStyles.fill;
          }
          const fillEnabled = !!particle.fillEnabled, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
          context.lineWidth = strokeWidth;
          if (colorStyles.stroke) {
            context.strokeStyle = colorStyles.stroke;
          }
          const drawData = {
            context,
            particle,
            radius,
            drawRadius: radius * drawScale,
            opacity,
            delta,
            pixelRatio: container.retina.pixelRatio,
            fill: fillEnabled,
            stroke: strokeWidth > minStrokeWidth,
            transformData,
            position: { ...pos },
            drawPosition,
            drawScale
          };
          for (const plugin of container.plugins) {
            plugin.drawParticleTransform?.(drawData);
          }
          const effect = particle.effect ? effectDrawers.get(particle.effect) : void 0, shape = particle.shape ? shapeDrawers.get(particle.shape) : void 0;
          this.#drawBeforeEffect(effect, drawData);
          this.#drawShapeBeforeDraw(shape, drawData);
          this.#drawShape(shape, drawData);
          this.#drawShapeAfterDraw(shape, drawData);
          this.#drawAfterEffect(effect, drawData);
          context.resetTransform();
        }
        #drawParticlePlugin(context, plugin, particle, delta) {
          if (!plugin.drawParticle) {
            return;
          }
          plugin.drawParticle(context, particle, delta);
        }
        #drawShape(drawer, data) {
          if (!drawer) {
            return;
          }
          const { context, fill, particle, stroke } = data;
          if (!particle.shape) {
            return;
          }
          context.beginPath();
          drawer.draw(data);
          if (particle.shapeClose) {
            context.closePath();
          }
          if (fill) {
            context.fill();
          }
          if (stroke) {
            context.stroke();
          }
        }
        #drawShapeAfterDraw(drawer, data) {
          if (!drawer?.afterDraw) {
            return;
          }
          const { particle } = data;
          if (!particle.shape) {
            return;
          }
          drawer.afterDraw(data);
        }
        #drawShapeBeforeDraw(drawer, data) {
          if (!drawer?.beforeDraw) {
            return;
          }
          const { particle } = data;
          if (!particle.shape) {
            return;
          }
          drawer.beforeDraw(data);
        }
        #getLayerPlugins(layer) {
          return this.#layers[layer];
        }
        #getPluginParticleColors(particle) {
          let fColor, sColor;
          for (const plugin of this.#colorPlugins) {
            if (!fColor && plugin.particleFillColor) {
              fColor = rangeColorToHsl(this.#pluginManager, plugin.particleFillColor(particle));
            }
            if (!sColor && plugin.particleStrokeColor) {
              sColor = rangeColorToHsl(this.#pluginManager, plugin.particleStrokeColor(particle));
            }
            if (fColor && sColor) {
              break;
            }
          }
          this.#reusablePluginColors[fColorIndex] = fColor;
          this.#reusablePluginColors[sColorIndex] = sColor;
          return this.#reusablePluginColors;
        }
        #initLayerPlugin(plugin) {
          const layerMap = [
            [DrawLayer.BackgroundMask, !!plugin.canvasPaint],
            [DrawLayer.CanvasSetup, !!plugin.drawSettingsSetup],
            [DrawLayer.PluginContent, !!plugin.draw],
            [DrawLayer.CanvasCleanup, !!(plugin.clearDraw ?? plugin.drawSettingsCleanup)]
          ];
          for (const [layer, active] of layerMap) {
            if (active) {
              this.#layers[layer].push(plugin);
            }
          }
        }
        #initPluginsArray() {
          for (const plugin of this.#container.plugins) {
            if (plugin.particleFillColor ?? plugin.particleStrokeColor) {
              this.#colorPlugins.push(plugin);
            }
            if (plugin.drawParticle) {
              this.#drawParticlePlugins.push(plugin);
            }
            if (plugin.drawParticleSetup) {
              this.#drawParticlesSetupPlugins.push(plugin);
            }
            if (plugin.drawParticleCleanup) {
              this.#drawParticlesCleanupPlugins.push(plugin);
            }
            if (plugin.canvasClear) {
              this.#canvasClearPlugins.push(plugin);
            }
            this.#initLayerPlugin(plugin);
          }
        }
        #isSupportedElement(element) {
          return typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && element instanceof OffscreenCanvas || typeof HTMLVideoElement !== "undefined" && element instanceof HTMLVideoElement || typeof HTMLImageElement !== "undefined" && element instanceof HTMLImageElement;
        }
        #resolveBackgroundElement() {
          const background = this.#container.actualOptions.background;
          this.#backgroundElement = null;
          if (!background.element) {
            return;
          }
          if (typeof background.element === "string") {
            if (typeof document !== "undefined") {
              let node;
              try {
                node = document.querySelector(background.element);
              } catch {
                this.#warnOnce("background-element-invalid-selector", `Background element selector "${background.element}" is invalid`);
                return;
              }
              if (node && this.#isSupportedElement(node)) {
                this.#backgroundElement = node;
              } else if (node) {
                this.#warnOnce("background-element-not-supported", `Background element "${background.element}" is not a supported drawable element (canvas, video, or img)`);
              } else {
                this.#warnOnce("background-element-not-found", `Background element selector "${background.element}" not found`);
              }
            }
          } else if (this.#isSupportedElement(background.element)) {
            this.#backgroundElement = background.element;
          }
        }
        #warnOnce(key, message) {
          if (!this.#backgroundWarnings.has(key)) {
            this.#backgroundWarnings.add(key);
            getLogger().warning(message);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/CanvasManager.js
  function setStyle(canvas, style, important = false) {
    if (!style) {
      return;
    }
    const element = canvas, elementStyle = element.style, keys = /* @__PURE__ */ new Set();
    for (let i = 0; i < elementStyle.length; i++) {
      const key = elementStyle.item(i);
      if (!key) {
        continue;
      }
      keys.add(key);
    }
    for (let i = 0; i < style.length; i++) {
      const key = style.item(i);
      if (!key) {
        continue;
      }
      keys.add(key);
    }
    for (const key of keys) {
      const value = style.getPropertyValue(key);
      if (value) {
        elementStyle.setProperty(key, value, important ? "important" : "");
      } else {
        elementStyle.removeProperty(key);
      }
    }
  }
  var transferredCanvases, getTransferredCanvas, isHtmlCanvasElement, getEffectiveColorSpace, CanvasManager;
  var init_CanvasManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/CanvasManager.js"() {
      init_ErrorUtils();
      init_Utils();
      init_Constants();
      init_ColorUtils();
      init_HdrMode();
      init_RenderManager();
      init_TypeUtils();
      transferredCanvases = /* @__PURE__ */ new WeakMap();
      getTransferredCanvas = (canvas) => {
        const transferredCanvas = transferredCanvases.get(canvas);
        if (transferredCanvas) {
          return transferredCanvas;
        }
        if (typeof canvas.transferControlToOffscreen !== "function") {
          throw new TypeError(getErrorMessage(ErrorCodes.offscreenCanvasUnsupported));
        }
        try {
          const offscreenCanvas = canvas.transferControlToOffscreen();
          transferredCanvases.set(canvas, offscreenCanvas);
          return offscreenCanvas;
        } catch {
          throw new TypeError(getErrorMessage(ErrorCodes.offscreenCanvasTransferFailed));
        }
      };
      isHtmlCanvasElement = (canvas) => {
        return typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement;
      };
      getEffectiveColorSpace = (context) => {
        if (!context) {
          return void 0;
        }
        const colorInfo = context;
        return colorInfo.getContextAttributes?.().colorSpace ?? void 0;
      };
      CanvasManager = class {
        domElement;
        render;
        renderCanvas;
        size;
        zoom = defaultZoom;
        #container;
        #generated;
        #hdrMediaListeners;
        #mutationObserver;
        #originalStyle;
        #pluginManager;
        #pointerEvents;
        #resizePlugins;
        #standardSize;
        #zoomCenter;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.render = new RenderManager(pluginManager, container, this);
          this.#standardSize = {
            height: 0,
            width: 0
          };
          const pxRatio = container.retina.pixelRatio, stdSize = this.#standardSize;
          this.size = {
            height: stdSize.height * pxRatio,
            width: stdSize.width * pxRatio
          };
          this.#generated = false;
          this.#resizePlugins = [];
          this.#pointerEvents = "none";
        }
        get #fullScreen() {
          return this.#container.actualOptions.fullScreen.enable;
        }
        destroy() {
          this.stop();
          if (this.#generated) {
            const element = this.domElement;
            element?.remove();
            this.domElement = void 0;
            this.renderCanvas = void 0;
          } else {
            this.#resetOriginalStyle();
          }
          this.render.destroy();
          this.#resizePlugins = [];
        }
        getZoomCenter() {
          const pxRatio = this.#container.retina.pixelRatio, { width, height } = this.size;
          if (this.#zoomCenter) {
            return this.#zoomCenter;
          }
          return {
            x: width * half / pxRatio,
            y: height * half / pxRatio
          };
        }
        init() {
          this.#safeMutationObserver((obs) => {
            obs.disconnect();
          });
          this.#mutationObserver = safeMutationObserver((records) => {
            for (const record of records) {
              if (record.type === "attributes" && record.attributeName === "style") {
                this.#repairStyle();
              }
            }
          });
          this.resize();
          this.#initStyle();
          this.#safeMutationObserver((obs) => {
            const element = this.domElement;
            if (!element || !(element instanceof Node)) {
              return;
            }
            obs.observe(element, { attributes: true });
          });
          this.initPlugins();
          this.#initContext();
          this.initBackground();
          this.#initHdrListeners();
          this.render.init();
        }
        initBackground() {
          const container = this.#container, options = container.actualOptions, background = options.background, element = this.domElement;
          if (!element) {
            return;
          }
          const elementStyle = element.style, color = rangeColorToRgb(this.#pluginManager, background.color);
          if (color) {
            const hdrOptions = container.actualOptions.hdr;
            elementStyle.backgroundColor = getStyleFromRgb(color, container.hdr, background.opacity, hdrOptions.peakNits, toEnumValue(HdrMode, hdrOptions.mode, HdrMode.standard));
          } else {
            elementStyle.backgroundColor = "";
          }
          elementStyle.backgroundImage = background.image || "";
          elementStyle.backgroundPosition = background.position || "";
          elementStyle.backgroundRepeat = background.repeat || "";
          elementStyle.backgroundSize = background.size || "";
        }
        initPlugins() {
          this.#resizePlugins = [];
          for (const plugin of this.#container.plugins) {
            if (plugin.resize) {
              this.#resizePlugins.push(plugin);
            }
          }
        }
        loadCanvas(canvas) {
          if (this.#generated && this.domElement) {
            this.domElement.remove();
          }
          const domCanvas = isHtmlCanvasElement(canvas) ? canvas : void 0;
          this.domElement = domCanvas;
          this.#generated = domCanvas ? domCanvas.dataset[generatedAttribute] === "true" : false;
          this.renderCanvas = domCanvas ? getTransferredCanvas(domCanvas) : canvas;
          const domElement = this.domElement;
          if (domElement) {
            domElement.ariaHidden = "true";
            this.#originalStyle = cloneStyle(domElement.style);
          }
          const standardSize = this.#standardSize, renderCanvas = this.renderCanvas;
          if (domElement) {
            standardSize.height = domElement.offsetHeight;
            standardSize.width = domElement.offsetWidth;
          } else {
            standardSize.height = renderCanvas.height;
            standardSize.width = renderCanvas.width;
          }
          const pxRatio = this.#container.retina.pixelRatio, retinaSize = this.size;
          renderCanvas.height = retinaSize.height = standardSize.height * pxRatio;
          renderCanvas.width = retinaSize.width = standardSize.width * pxRatio;
        }
        resize() {
          const element = this.domElement;
          if (!element) {
            return false;
          }
          const container = this.#container, renderCanvas = this.renderCanvas;
          if (renderCanvas === void 0) {
            return false;
          }
          const currentSize = container.canvas.#standardSize, newSize = {
            width: element.offsetWidth,
            height: element.offsetHeight
          }, pxRatio = container.retina.pixelRatio, retinaSize = {
            width: newSize.width * pxRatio,
            height: newSize.height * pxRatio
          };
          if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === renderCanvas.height && retinaSize.width === renderCanvas.width) {
            return false;
          }
          const oldSize = { ...currentSize };
          currentSize.height = newSize.height;
          currentSize.width = newSize.width;
          const canvasSize = this.size;
          renderCanvas.width = canvasSize.width = retinaSize.width;
          renderCanvas.height = canvasSize.height = retinaSize.height;
          if (this.#container.started) {
            container.particles.setResizeFactor({
              width: currentSize.width / oldSize.width,
              height: currentSize.height / oldSize.height
            });
          }
          return true;
        }
        setPointerEvents(type) {
          const element = this.domElement;
          if (!element) {
            return;
          }
          this.#pointerEvents = type;
          this.#repairStyle();
        }
        setZoom(zoomLevel, center) {
          this.zoom = zoomLevel;
          this.#zoomCenter = center;
        }
        stop() {
          this.#safeMutationObserver((obs) => {
            obs.disconnect();
          });
          this.#mutationObserver = void 0;
          this.#removeHdrListeners();
          this.render.stop();
        }
        async windowResize() {
          if (!this.domElement || !this.resize()) {
            return;
          }
          const container = this.#container, needsRefresh = container.updateActualOptions();
          container.particles.setDensity();
          this.#applyResizePlugins();
          if (needsRefresh) {
            await container.refresh();
          }
        }
        #applyResizePlugins() {
          for (const plugin of this.#resizePlugins) {
            plugin.resize?.();
          }
        }
        #initContext() {
          const container = this.#container, canSupportHdr = container.actualOptions.hdr.enable && safeMatchMedia("(color-gamut: p3)")?.matches && safeMatchMedia("(dynamic-range: high)")?.matches;
          container.hdrMode = toEnumValue(HdrMode, container.actualOptions.hdr.mode, HdrMode.standard);
          container.peakNits = container.actualOptions.hdr.peakNits;
          const renderCanvas = this.renderCanvas;
          if (!renderCanvas) {
            container.hdr = canSupportHdr ?? false;
            return;
          }
          this.render.setContextSettings({
            alpha: true,
            desynchronized: true,
            willReadFrequently: false,
            ...canSupportHdr ? { colorSpace: "display-p3", colorType: "float16" } : { colorSpace: "srgb" }
          });
          let context;
          try {
            context = renderCanvas.getContext("2d", this.render.settings);
          } catch {
            context = null;
          }
          if (canSupportHdr && !context) {
            const sdrSettings = {
              alpha: true,
              desynchronized: true,
              willReadFrequently: false,
              colorSpace: "srgb"
            };
            this.render.setContextSettings(sdrSettings);
            try {
              context = renderCanvas.getContext("2d", sdrSettings);
            } catch {
              context = null;
            }
          }
          this.render.setContext(context);
          if (context) {
            const effectiveColorSpace = getEffectiveColorSpace(context);
            if (effectiveColorSpace !== void 0) {
              container.hdr = effectiveColorSpace === "display-p3";
            }
          }
        }
        #initHdrListeners() {
          this.#removeHdrListeners();
          const p3Query = safeMatchMedia("(color-gamut: p3)"), hdrQuery = safeMatchMedia("(dynamic-range: high)"), handleChange = () => {
            this.#initContext();
            this.initBackground();
          }, listeners = [];
          if (p3Query) {
            p3Query.addEventListener("change", handleChange);
            listeners.push({ handler: handleChange, mql: p3Query });
          }
          if (hdrQuery) {
            hdrQuery.addEventListener("change", handleChange);
            listeners.push({ handler: handleChange, mql: hdrQuery });
          }
          this.#hdrMediaListeners = listeners;
        }
        #initStyle() {
          const element = this.domElement, options = this.#container.actualOptions;
          if (!element) {
            return;
          }
          if (this.#fullScreen) {
            this.#setFullScreenStyle();
          } else {
            this.#resetOriginalStyle();
          }
          for (const key in options.style) {
            if (!key || !(key in options.style)) {
              continue;
            }
            const value = options.style[key];
            if (!value) {
              continue;
            }
            element.style.setProperty(key, value, "important");
          }
        }
        #removeHdrListeners() {
          if (!this.#hdrMediaListeners) {
            return;
          }
          for (const { handler, mql } of this.#hdrMediaListeners) {
            mql.removeEventListener("change", handler);
          }
          this.#hdrMediaListeners = void 0;
        }
        #repairStyle() {
          const element = this.domElement;
          if (!element) {
            return;
          }
          this.#safeMutationObserver((observer) => {
            observer.disconnect();
          });
          this.#initStyle();
          this.initBackground();
          const pointerEvents = this.#pointerEvents;
          element.style.pointerEvents = pointerEvents;
          element.style.setProperty("pointer-events", pointerEvents);
          this.#safeMutationObserver((observer) => {
            if (!(element instanceof Node)) {
              return;
            }
            observer.observe(element, { attributes: true });
          });
        }
        #resetOriginalStyle() {
          const element = this.domElement, originalStyle = this.#originalStyle;
          if (!element || !originalStyle) {
            return;
          }
          setStyle(element, originalStyle, true);
        }
        #safeMutationObserver(callback) {
          if (!this.#mutationObserver) {
            return;
          }
          callback(this.#mutationObserver);
        }
        #setFullScreenStyle() {
          const element = this.domElement;
          if (!element) {
            return;
          }
          setStyle(element, getFullScreenStyle(this.#container.actualOptions.fullScreen.zIndex), true);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js
  var EventListeners;
  var init_EventListeners = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js"() {
      init_Utils();
      init_Constants();
      EventListeners = class {
        #container;
        #handlers;
        #resizeObserver;
        #resizeTimeout;
        constructor(container) {
          this.#container = container;
          this.#handlers = {
            visibilityChange: () => {
              this.#handleVisibilityChange();
            },
            resize: () => {
              this.#handleWindowResize();
            }
          };
        }
        addListeners() {
          this.#manageListeners(true);
        }
        removeListeners() {
          if (this.#resizeTimeout !== void 0) {
            clearTimeout(this.#resizeTimeout);
            this.#resizeTimeout = void 0;
          }
          this.#manageListeners(false);
        }
        #handleVisibilityChange() {
          const container = this.#container, options = container.actualOptions;
          if (!options.pauseOnBlur) {
            return;
          }
          if (safeDocument().hidden) {
            container.pageHidden = true;
            container.pause();
          } else {
            container.pageHidden = false;
            if (container.animationStatus) {
              container.play(true);
            } else {
              container.draw(true);
            }
          }
        }
        #handleWindowResize() {
          if (this.#resizeTimeout) {
            clearTimeout(this.#resizeTimeout);
            this.#resizeTimeout = void 0;
          }
          const handleResize = async () => {
            await this.#container.canvas.windowResize();
          };
          this.#resizeTimeout = setTimeout(() => void handleResize(), this.#container.actualOptions.resize.delay * millisecondsToSeconds);
        }
        #manageListeners(add) {
          const handlers = this.#handlers;
          this.#manageResize(add);
          if (typeof document !== "undefined") {
            manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
          }
        }
        #manageResize(add) {
          const handlers = this.#handlers, container = this.#container, options = container.actualOptions;
          if (!options.resize.enable) {
            return;
          }
          if (typeof ResizeObserver === "undefined") {
            manageListener(globalThis, resizeEvent, handlers.resize, add);
            return;
          }
          const canvasEl = container.canvas.domElement;
          if (this.#resizeObserver && !add) {
            if (canvasEl) {
              this.#resizeObserver.unobserve(canvasEl);
            }
            this.#resizeObserver.disconnect();
            this.#resizeObserver = void 0;
          } else if (!this.#resizeObserver && add && canvasEl) {
            this.#resizeObserver = new ResizeObserver((entries) => {
              const res = entries.some((e) => e.target === canvasEl);
              if (!res) {
                return;
              }
              this.#handleWindowResize();
            });
            this.#resizeObserver.observe(canvasEl);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js
  function loadProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key] = value;
    }
  }
  function loadRangeProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key] = setRangeValue(value);
    }
  }
  function loadNestedProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key].load(value);
    }
  }
  function loadLazyProperty(obj, key, value, factory) {
    if (value !== void 0) {
      const objRecord = obj;
      objRecord[key] ??= factory();
      objRecord[key].load(value);
    }
  }
  function loadOptionProperty(obj, key, optionClass, ...sources) {
    const objRecord = obj;
    objRecord[key] ??= new optionClass();
    const target = objRecord[key];
    for (const source of sources) {
      target.load(source?.[key]);
    }
  }
  var init_OptionsUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js"() {
      init_Utils();
      init_MathUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/OptionLoader.js
  function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
      options.load(sourceOptions);
    }
  }
  var OptionLoader;
  var init_OptionLoader = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/OptionLoader.js"() {
      init_TypeUtils();
      OptionLoader = class {
        load(data) {
          if (isNull(data)) {
            return;
          }
          this.doLoad(data);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js
  var OptionsColor;
  var init_OptionsColor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js"() {
      init_TypeUtils();
      init_OptionLoader();
      OptionsColor = class _OptionsColor extends OptionLoader {
        value = "";
        static create(source, data) {
          const color = new _OptionsColor();
          color.load(source);
          if (data !== void 0) {
            if (isString(data) || isArray(data)) {
              color.load({ value: data });
            } else {
              color.load(data);
            }
          }
          return color;
        }
        doLoad(data) {
          if (!isNull(data.value)) {
            this.value = data.value;
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js
  var Background;
  var init_Background = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js"() {
      init_OptionLoader();
      init_OptionsColor();
      init_OptionsUtils();
      Background = class extends OptionLoader {
        color;
        draw;
        element;
        image = "";
        opacity = 1;
        position = "";
        repeat = "";
        size = "";
        constructor() {
          super();
          this.color = new OptionsColor();
          this.color.value = "";
        }
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = OptionsColor.create(this.color, data.color);
          }
          loadProperty(this, "element", data.element);
          loadProperty(this, "draw", data.draw);
          loadProperty(this, "image", data.image);
          loadProperty(this, "position", data.position);
          loadProperty(this, "repeat", data.repeat);
          loadProperty(this, "size", data.size);
          loadProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js
  var FullScreen;
  var init_FullScreen = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      FullScreen = class extends OptionLoader {
        enable = true;
        zIndex = 0;
        doLoad(data) {
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "zIndex", data.zIndex);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/HDROptions.js
  var defaultPeakNits, minPeakNits, toStringValue2, HDROptions;
  var init_HDROptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/HDROptions.js"() {
      init_ErrorUtils();
      init_TypeUtils();
      init_HdrMode();
      init_OptionLoader();
      init_OptionsUtils();
      defaultPeakNits = 400;
      minPeakNits = 0;
      toStringValue2 = (value) => String(value);
      HDROptions = class extends OptionLoader {
        enable = true;
        mode = HdrMode.standard;
        peakNits = defaultPeakNits;
        doLoad(data) {
          if (data.enable !== void 0 && !isBoolean(data.enable)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrEnableInvalid, String(data.enable)));
          }
          if (data.mode !== void 0 && !isEnumValue(HdrMode, data.mode)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrModeInvalid, Object.values(HdrMode).join(", "), toStringValue2(data.mode)));
          }
          if (data.peakNits !== void 0 && (!isNumber(data.peakNits) || !Number.isFinite(data.peakNits) || data.peakNits <= minPeakNits)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrPeakNitsInvalid, String(data.peakNits)));
          }
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "peakNits", data.peakNits);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ResizeEvent.js
  var ResizeEvent;
  var init_ResizeEvent = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ResizeEvent.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      ResizeEvent = class extends OptionLoader {
        delay = 0.5;
        enable = true;
        doLoad(data) {
          loadProperty(this, "delay", data.delay);
          loadProperty(this, "enable", data.enable);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js
  var AnimationMode;
  var init_AnimationMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js"() {
      (function(AnimationMode2) {
        AnimationMode2["auto"] = "auto";
        AnimationMode2["increase"] = "increase";
        AnimationMode2["decrease"] = "decrease";
        AnimationMode2["random"] = "random";
      })(AnimationMode || (AnimationMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js
  var StartValueType;
  var init_StartValueType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js"() {
      (function(StartValueType2) {
        StartValueType2["max"] = "max";
        StartValueType2["min"] = "min";
        StartValueType2["random"] = "random";
      })(StartValueType || (StartValueType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js
  var AnimationOptions, RangedAnimationOptions;
  var init_AnimationOptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js"() {
      init_OptionsUtils();
      init_AnimationMode();
      init_OptionLoader();
      init_StartValueType();
      AnimationOptions = class extends OptionLoader {
        count = 0;
        decay = 0;
        delay = 0;
        enable = false;
        speed = 1;
        sync = false;
        doLoad(data) {
          loadRangeProperty(this, "count", data.count);
          loadProperty(this, "enable", data.enable);
          loadRangeProperty(this, "speed", data.speed);
          loadRangeProperty(this, "decay", data.decay);
          loadRangeProperty(this, "delay", data.delay);
          loadProperty(this, "sync", data.sync);
        }
      };
      RangedAnimationOptions = class extends AnimationOptions {
        mode = AnimationMode.auto;
        startValue = StartValueType.random;
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "startValue", data.startValue);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js
  var ColorAnimation;
  var init_ColorAnimation = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js"() {
      init_OptionsUtils();
      init_AnimationOptions();
      ColorAnimation = class extends AnimationOptions {
        max;
        min;
        offset = 0;
        sync = true;
        constructor(min, max) {
          super();
          this.min = min;
          this.max = max;
        }
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "max", data.max);
          loadProperty(this, "min", data.min);
          loadRangeProperty(this, "offset", data.offset);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js
  var HslAnimation;
  var init_HslAnimation = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js"() {
      init_Constants();
      init_ColorAnimation();
      init_OptionLoader();
      HslAnimation = class extends OptionLoader {
        h = new ColorAnimation(hMin, hMax);
        l = new ColorAnimation(lMin, lMax);
        s = new ColorAnimation(sMin, sMax);
        doLoad(data) {
          this.h.load(data.h);
          this.s.load(data.s);
          this.l.load(data.l);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js
  var AnimatableColor;
  var init_AnimatableColor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js"() {
      init_TypeUtils();
      init_HslAnimation();
      init_OptionsColor();
      AnimatableColor = class _AnimatableColor extends OptionsColor {
        animation = new HslAnimation();
        static create(source, data) {
          const color = new _AnimatableColor();
          color.load(source);
          if (data !== void 0) {
            if (isString(data) || isArray(data)) {
              color.load({ value: data });
            } else {
              color.load(data);
            }
          }
          return color;
        }
        doLoad(data) {
          super.doLoad(data);
          const colorAnimation = data.animation;
          if (colorAnimation !== void 0) {
            if (colorAnimation.enable === void 0) {
              this.animation.load(data.animation);
            } else {
              this.animation.h.load(colorAnimation);
            }
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js
  var Effect;
  var init_Effect = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js"() {
      init_OptionLoader();
      init_Utils();
      init_OptionsUtils();
      Effect = class extends OptionLoader {
        close = true;
        options = {};
        type = [];
        doLoad(data) {
          const options = data.options;
          if (options !== void 0) {
            for (const effect in options) {
              const item = options[effect];
              if (item) {
                this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
              }
            }
          }
          loadProperty(this, "close", data.close);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Fill.js
  var Fill;
  var init_Fill = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Fill.js"() {
      init_OptionsUtils();
      init_AnimatableColor();
      init_OptionLoader();
      Fill = class extends OptionLoader {
        color;
        enable = true;
        opacity = 1;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadProperty(this, "enable", data.enable);
          loadRangeProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js
  var MoveAngle;
  var init_MoveAngle = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      MoveAngle = class extends OptionLoader {
        offset = 0;
        value = 90;
        doLoad(data) {
          loadRangeProperty(this, "offset", data.offset);
          loadRangeProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js
  var MoveCenter;
  var init_MoveCenter = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js"() {
      init_OptionLoader();
      init_PixelMode();
      init_OptionsUtils();
      MoveCenter = class extends OptionLoader {
        mode = PixelMode.percent;
        radius = 0;
        x = 50;
        y = 50;
        doLoad(data) {
          loadProperty(this, "x", data.x);
          loadProperty(this, "y", data.y);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "radius", data.radius);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js
  var MoveGravity;
  var init_MoveGravity = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js"() {
      init_OptionsUtils();
      init_OptionLoader();
      MoveGravity = class extends OptionLoader {
        acceleration = 9.81;
        enable = false;
        inverse = false;
        maxSpeed = 50;
        doLoad(data) {
          loadRangeProperty(this, "acceleration", data.acceleration);
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "inverse", data.inverse);
          loadRangeProperty(this, "maxSpeed", data.maxSpeed);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js
  var ValueWithRandom, AnimationValueWithRandom, RangedAnimationValueWithRandom;
  var init_ValueWithRandom = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js"() {
      init_AnimationOptions();
      init_OptionLoader();
      init_TypeUtils();
      init_OptionsUtils();
      init_MathUtils();
      ValueWithRandom = class extends OptionLoader {
        value = 0;
        doLoad(data) {
          if (!isNull(data.value)) {
            this.value = setRangeValue(data.value);
          }
        }
      };
      AnimationValueWithRandom = class extends ValueWithRandom {
        animation = new AnimationOptions();
        doLoad(data) {
          super.doLoad(data);
          loadNestedProperty(this, "animation", data.animation);
        }
      };
      RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
        animation = new RangedAnimationOptions();
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js
  var MovePath;
  var init_MovePath = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js"() {
      init_OptionLoader();
      init_ValueWithRandom();
      init_Utils();
      init_OptionsUtils();
      MovePath = class extends OptionLoader {
        clamp = true;
        delay = new ValueWithRandom();
        enable = false;
        generator;
        options = {};
        doLoad(data) {
          loadProperty(this, "clamp", data.clamp);
          this.delay.load(data.delay);
          loadProperty(this, "enable", data.enable);
          this.generator = data.generator;
          if (data.options) {
            this.options = deepExtend(this.options, data.options);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js
  var OutMode;
  var init_OutMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js"() {
      (function(OutMode2) {
        OutMode2["bounce"] = "bounce";
        OutMode2["none"] = "none";
        OutMode2["out"] = "out";
        OutMode2["destroy"] = "destroy";
        OutMode2["split"] = "split";
      })(OutMode || (OutMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js
  var OutModes;
  var init_OutModes = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js"() {
      init_OptionLoader();
      init_OutMode();
      OutModes = class extends OptionLoader {
        bottom;
        default = OutMode.out;
        left;
        right;
        top;
        doLoad(data) {
          if (data.default !== void 0) {
            this.default = data.default;
          }
          this.bottom = data.bottom ?? data.default;
          this.left = data.left ?? data.default;
          this.right = data.right ?? data.default;
          this.top = data.top ?? data.default;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js
  var Spin;
  var init_Spin = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js"() {
      init_OptionsUtils();
      init_OptionLoader();
      init_Utils();
      Spin = class extends OptionLoader {
        acceleration = 0;
        enable = false;
        position;
        doLoad(data) {
          loadRangeProperty(this, "acceleration", data.acceleration);
          loadProperty(this, "enable", data.enable);
          if (data.position) {
            this.position = deepExtend({}, data.position);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js
  var Move;
  var init_Move = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js"() {
      init_MoveDirection();
      init_TypeUtils();
      init_OptionsUtils();
      init_MoveAngle();
      init_MoveCenter();
      init_MoveGravity();
      init_MovePath();
      init_OptionLoader();
      init_OutModes();
      init_Spin();
      Move = class extends OptionLoader {
        angle = new MoveAngle();
        center = new MoveCenter();
        decay = 0;
        direction = MoveDirection.none;
        distance = {};
        drift = 0;
        enable = false;
        gravity = new MoveGravity();
        outModes = new OutModes();
        path = new MovePath();
        random = false;
        size = false;
        speed = 2;
        spin = new Spin();
        straight = false;
        vibrate = false;
        warp = false;
        doLoad(data) {
          this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
          this.center.load(data.center);
          loadRangeProperty(this, "decay", data.decay);
          loadProperty(this, "direction", data.direction);
          if (data.distance !== void 0) {
            this.distance = isNumber(data.distance) ? {
              horizontal: data.distance,
              vertical: data.distance
            } : { ...data.distance };
          }
          loadRangeProperty(this, "drift", data.drift);
          loadProperty(this, "enable", data.enable);
          this.gravity.load(data.gravity);
          const outModes = data.outModes;
          if (outModes !== void 0) {
            if (isObject(outModes)) {
              this.outModes.load(outModes);
            } else {
              this.outModes.load({
                default: outModes
              });
            }
          }
          this.path.load(data.path);
          loadProperty(this, "random", data.random);
          loadProperty(this, "size", data.size);
          loadRangeProperty(this, "speed", data.speed);
          this.spin.load(data.spin);
          loadProperty(this, "straight", data.straight);
          loadProperty(this, "vibrate", data.vibrate);
          loadProperty(this, "warp", data.warp);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js
  var Stroke;
  var init_Stroke = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js"() {
      init_AnimatableColor();
      init_OptionLoader();
      init_OptionsUtils();
      Stroke = class extends OptionLoader {
        color;
        opacity;
        width = 0;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadRangeProperty(this, "width", data.width);
          loadRangeProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Paint.js
  var Paint;
  var init_Paint = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Paint.js"() {
      init_AnimatableColor();
      init_Fill();
      init_OptionLoader();
      init_Stroke();
      init_OptionsUtils();
      Paint = class extends OptionLoader {
        color;
        fill;
        stroke;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadLazyProperty(this, "fill", data.fill, () => new Fill());
          loadLazyProperty(this, "stroke", data.stroke, () => new Stroke());
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
  var ParticlesBounceFactor;
  var init_ParticlesBounceFactor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js"() {
      init_ValueWithRandom();
      ParticlesBounceFactor = class extends ValueWithRandom {
        value = 1;
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js
  var ParticlesBounce;
  var init_ParticlesBounce = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js"() {
      init_OptionLoader();
      init_ParticlesBounceFactor();
      ParticlesBounce = class extends OptionLoader {
        horizontal = new ParticlesBounceFactor();
        vertical = new ParticlesBounceFactor();
        doLoad(data) {
          this.horizontal.load(data.horizontal);
          this.vertical.load(data.vertical);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js
  var ParticlesDensity;
  var init_ParticlesDensity = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      ParticlesDensity = class extends OptionLoader {
        enable = false;
        height = 1080;
        width = 1920;
        doLoad(data) {
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "width", data.width);
          loadProperty(this, "height", data.height);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js
  var LimitMode;
  var init_LimitMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js"() {
      (function(LimitMode2) {
        LimitMode2["delete"] = "delete";
        LimitMode2["wait"] = "wait";
      })(LimitMode || (LimitMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js
  var ParticlesNumberLimit;
  var init_ParticlesNumberLimit = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js"() {
      init_LimitMode();
      init_OptionLoader();
      init_OptionsUtils();
      ParticlesNumberLimit = class extends OptionLoader {
        mode = LimitMode.delete;
        value = 0;
        doLoad(data) {
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js
  var ParticlesNumber;
  var init_ParticlesNumber = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js"() {
      init_OptionLoader();
      init_ParticlesDensity();
      init_ParticlesNumberLimit();
      init_OptionsUtils();
      ParticlesNumber = class extends OptionLoader {
        density = new ParticlesDensity();
        limit = new ParticlesNumberLimit();
        value = 0;
        doLoad(data) {
          this.density.load(data.density);
          this.limit.load(data.limit);
          loadProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js
  var Shape;
  var init_Shape = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js"() {
      init_OptionLoader();
      init_Utils();
      init_OptionsUtils();
      Shape = class extends OptionLoader {
        close = true;
        options = {};
        type = "circle";
        doLoad(data) {
          const options = data.options;
          if (options !== void 0) {
            for (const shape in options) {
              const item = options[shape];
              if (item) {
                this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
              }
            }
          }
          loadProperty(this, "close", data.close);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js
  var ZIndex;
  var init_ZIndex = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js"() {
      init_ValueWithRandom();
      init_OptionsUtils();
      ZIndex = class extends ValueWithRandom {
        opacityRate = 1;
        sizeRate = 1;
        velocityRate = 1;
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "opacityRate", data.opacityRate);
          loadProperty(this, "sizeRate", data.sizeRate);
          loadProperty(this, "velocityRate", data.velocityRate);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js
  var ParticlesOptions;
  var init_ParticlesOptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js"() {
      init_Utils();
      init_AnimatableColor();
      init_Effect();
      init_Fill();
      init_Move();
      init_OptionLoader();
      init_Paint();
      init_ParticlesBounce();
      init_ParticlesNumber();
      init_Shape();
      init_ZIndex();
      init_TypeUtils();
      ParticlesOptions = class extends OptionLoader {
        bounce = new ParticlesBounce();
        effect = new Effect();
        groups = {};
        move = new Move();
        number = new ParticlesNumber();
        paint;
        palette;
        reduceDuplicates = false;
        shape = new Shape();
        zIndex = new ZIndex();
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          super();
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.paint = new Paint();
          this.paint.color = new AnimatableColor();
          this.paint.color.value = "#fff";
          this.paint.fill = new Fill();
          this.paint.fill.enable = true;
        }
        doLoad(data) {
          if (data.palette) {
            this.palette = data.palette;
            this.#importPalette(this.palette);
          }
          if (data.groups !== void 0) {
            for (const group of Object.keys(data.groups)) {
              if (!(group in data.groups)) {
                continue;
              }
              const item = data.groups[group];
              if (item !== void 0) {
                this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
              }
            }
          }
          if (data.reduceDuplicates !== void 0) {
            this.reduceDuplicates = data.reduceDuplicates;
          }
          this.bounce.load(data.bounce);
          this.effect.load(data.effect);
          this.move.load(data.move);
          this.number.load(data.number);
          const paintToLoad = data.paint;
          if (paintToLoad) {
            if (isArray(paintToLoad)) {
              this.paint = executeOnSingleOrMultiple(paintToLoad, (t) => {
                const tmp = new Paint();
                tmp.load(t);
                return tmp;
              });
            } else if (isArray(this.paint)) {
              this.paint = new Paint();
              this.paint.load(paintToLoad);
            } else {
              this.paint.load(paintToLoad);
            }
          }
          this.shape.load(data.shape);
          this.zIndex.load(data.zIndex);
          if (this.#container) {
            for (const plugin of this.#pluginManager.plugins) {
              if (plugin.loadParticlesOptions) {
                plugin.loadParticlesOptions(this.#container, this, data);
              }
            }
            const updaters = this.#container.particleUpdaters;
            for (const updater of updaters) {
              if (updater.loadOptions) {
                updater.loadOptions(this, data);
              }
            }
          }
        }
        #importPalette(palette) {
          const paletteData = this.#pluginManager.getPalette(palette);
          if (!paletteData) {
            return;
          }
          const paletteColors = paletteData.colors, defaultPaintStrokeWidth = 0, defaultPaintVariantsLength = 1, firstPaintVariantIndex = 0, defaultPalettePaintVariant = {}, colorVariants = isArray(paletteColors) ? paletteColors : [paletteColors], palettePaintVariants = colorVariants.flatMap((variant) => {
            const paletteFill = variant.fill, paletteStroke = variant.stroke, fillPart = paletteFill ? {
              color: {
                value: paletteFill.value
              },
              enable: paletteFill.enable,
              opacity: paletteFill.opacity
            } : void 0;
            if (!paletteStroke) {
              return [
                {
                  fill: fillPart
                }
              ];
            }
            return [
              {
                fill: fillPart,
                stroke: {
                  color: {
                    value: paletteStroke.value
                  },
                  opacity: paletteStroke.opacity,
                  width: paletteStroke.width || defaultPaintStrokeWidth
                }
              }
            ];
          }), palettePaint = palettePaintVariants.length > defaultPaintVariantsLength ? palettePaintVariants : palettePaintVariants[firstPaintVariantIndex] ?? defaultPalettePaintVariant;
          this.load({
            paint: palettePaint,
            blend: {
              enable: true,
              mode: paletteData.blendMode
            }
          });
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ParticlesOptionsLoader.js
  function loadParticlesOptions(pluginManager, container, ...sourceOptionsArr) {
    const options = new ParticlesOptions(pluginManager, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }
  var init_ParticlesOptionsLoader = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ParticlesOptionsLoader.js"() {
      init_ParticlesOptions();
      init_OptionLoader();
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Options.js
  var Options;
  var init_Options = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Options.js"() {
      init_Utils();
      init_OptionsUtils();
      init_Background();
      init_FullScreen();
      init_HDROptions();
      init_HdrMode();
      init_OptionLoader();
      init_ResizeEvent();
      init_TypeUtils();
      init_ParticlesOptionsLoader();
      Options = class extends OptionLoader {
        autoPlay = true;
        background;
        clear = true;
        defaultThemes = {};
        delay = 0;
        detectRetina = true;
        duration = 0;
        fpsLimit = 120;
        fullScreen;
        hdr;
        key;
        name;
        palette;
        particles;
        pauseOnBlur = true;
        pauseOnOutsideViewport = true;
        preset;
        resize;
        smooth = false;
        style = {};
        zLayers = 100;
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          super();
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.background = new Background();
          this.fullScreen = new FullScreen();
          this.hdr = new HDROptions();
          this.particles = loadParticlesOptions(this.#pluginManager, this.#container);
          this.resize = new ResizeEvent();
        }
        doLoad(data) {
          if (data.preset !== void 0) {
            this.preset = data.preset;
            executeOnSingleOrMultiple(this.preset, (preset) => {
              this.#importPreset(preset);
            });
          }
          if (data.palette !== void 0) {
            this.palette = data.palette;
            this.#importPalette(this.palette);
          }
          loadProperty(this, "autoPlay", data.autoPlay);
          loadProperty(this, "clear", data.clear);
          loadProperty(this, "key", data.key);
          loadProperty(this, "name", data.name);
          loadRangeProperty(this, "delay", data.delay);
          loadProperty(this, "detectRetina", data.detectRetina);
          loadRangeProperty(this, "duration", data.duration);
          loadProperty(this, "fpsLimit", data.fpsLimit);
          const hdrData = data.hdr;
          if (isBoolean(hdrData)) {
            this.hdr.enable = hdrData;
            this.hdr.mode = HdrMode.standard;
            this.hdr.peakNits = 400;
          } else {
            this.hdr.load(hdrData);
          }
          loadProperty(this, "pauseOnBlur", data.pauseOnBlur);
          loadProperty(this, "pauseOnOutsideViewport", data.pauseOnOutsideViewport);
          loadProperty(this, "zLayers", data.zLayers);
          this.background.load(data.background);
          const fullScreen = data.fullScreen;
          if (isBoolean(fullScreen)) {
            this.fullScreen.enable = fullScreen;
          } else {
            this.fullScreen.load(fullScreen);
          }
          this.particles.load(data.particles);
          this.resize.load(data.resize);
          this.style = deepExtend(this.style, data.style);
          loadProperty(this, "smooth", data.smooth);
          this.#pluginManager.plugins.forEach((plugin) => {
            plugin.loadOptions(this.#container, this, data);
          });
        }
        #importPalette(palette) {
          const paletteData = this.#pluginManager.getPalette(palette);
          if (!paletteData) {
            return;
          }
          this.load({
            background: {
              color: paletteData.background
            },
            blend: {
              enable: true,
              mode: paletteData.blendMode
            },
            particles: {
              palette
            }
          });
        }
        #importPreset(preset) {
          this.load(this.#pluginManager.getPreset(preset));
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js
  var ParticleOutType;
  var init_ParticleOutType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js"() {
      (function(ParticleOutType2) {
        ParticleOutType2["normal"] = "normal";
        ParticleOutType2["inside"] = "inside";
        ParticleOutType2["outside"] = "outside";
      })(ParticleOutType || (ParticleOutType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Particle.js
  function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    return deepExtend({
      close: effectOptions.close
    }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
  }
  function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    return deepExtend({
      close: shapeOptions.close
    }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
  }
  function fixOutMode(data) {
    if (!isInArray(data.outMode, data.checkModes)) {
      return;
    }
    const diameter = data.radius * double;
    if (data.coord > data.maxCoord - diameter) {
      data.setCb(-data.radius);
    } else if (data.coord < diameter) {
      data.setCb(data.radius);
    }
  }
  function normalizeAngle(angle, modulus) {
    const normalized = angle % modulus;
    return normalized < defaultAngle ? normalized + modulus : normalized;
  }
  function initParticleState(particle, id, group) {
    particle.id = id;
    particle.group = group;
    particle.justWarped = false;
    particle.effectClose = true;
    particle.shapeClose = true;
    particle.pathRotation = false;
    particle.lastPathTime = 0;
    particle.destroyed = false;
    particle.unbreakable = false;
    particle.isRotating = false;
    particle.rotation = 0;
    particle.misplaced = false;
    particle.retina = {
      maxDistance: {},
      maxSpeed: 0,
      moveDrift: 0,
      moveSpeed: 0,
      sizeAnimationSpeed: 0
    };
    particle.size = {
      value: 1,
      max: 1,
      min: 1,
      enable: false
    };
    particle.outType = ParticleOutType.normal;
    particle.ignoresResizeRatio = true;
  }
  function resolveParticleOptions(particle, container, pluginManager, overrideOptions) {
    const mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(pluginManager, container, mainOptions.particles), reduceDuplicates = particlesOptions.reduceDuplicates;
    particle.effect = itemFromSingleOrMultiple(particlesOptions.effect.type, particle.id, reduceDuplicates);
    particle.shape = itemFromSingleOrMultiple(particlesOptions.shape.type, particle.id, reduceDuplicates);
    const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
    if (overrideOptions) {
      if (overrideOptions.effect) {
        const overrideEffectType = overrideOptions.effect.type;
        if (overrideEffectType && overrideEffectType !== particle.effect) {
          const effect = itemFromSingleOrMultiple(overrideEffectType, particle.id, reduceDuplicates);
          if (effect) {
            particle.effect = effect;
          }
        }
        effectOptions.load(overrideOptions.effect);
      }
      if (overrideOptions.shape) {
        const overrideShapeType = overrideOptions.shape.type;
        if (overrideShapeType && overrideShapeType !== particle.shape) {
          const shape = itemFromSingleOrMultiple(overrideShapeType, particle.id, reduceDuplicates);
          if (shape) {
            particle.shape = shape;
          }
        }
        shapeOptions.load(overrideOptions.shape);
      }
    }
    if (particle.effect === randomColorValue) {
      const availableEffects = [...container.effectDrawers.keys()];
      particle.effect = availableEffects[Math.floor(getRandom() * availableEffects.length)];
    }
    if (particle.shape === randomColorValue) {
      const availableShapes = [...container.shapeDrawers.keys()];
      particle.shape = availableShapes[Math.floor(getRandom() * availableShapes.length)];
    }
    particle.effectData = particle.effect ? loadEffectData(particle.effect, effectOptions, particle.id, reduceDuplicates) : void 0;
    particle.shapeData = particle.shape ? loadShapeData(particle.shape, shapeOptions, particle.id, reduceDuplicates) : void 0;
    particlesOptions.load(overrideOptions);
    const effectData = particle.effectData, shapeData = particle.shapeData;
    if (effectData) {
      particlesOptions.load(effectData.particles);
    }
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    particle.effectClose = effectData?.close ?? particlesOptions.effect.close;
    particle.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
    return particlesOptions;
  }
  function initParticleDrawers(particle, container) {
    let effectDrawer, shapeDrawer;
    if (particle.effect) {
      effectDrawer = container.effectDrawers.get(particle.effect);
    }
    if (effectDrawer?.loadEffect) {
      effectDrawer.loadEffect(particle);
    }
    if (particle.shape) {
      shapeDrawer = container.shapeDrawers.get(particle.shape);
    }
    if (shapeDrawer?.loadShape) {
      shapeDrawer.loadShape(particle);
    }
    const sideCountFunc = shapeDrawer?.getSidesCount;
    if (sideCountFunc) {
      particle.sides = sideCountFunc(particle);
    }
  }
  function runUpdaterPreInit(updaters, particle) {
    for (const updater of updaters) {
      updater.preInit?.(particle);
    }
  }
  function runUpdaterInit(updaters, particle) {
    for (const updater of updaters) {
      updater.init(particle);
    }
  }
  function runDrawerInit(container, particle) {
    const shapeDrawer = particle.shape ? container.shapeDrawers.get(particle.shape) : void 0, effectDrawer = particle.effect ? container.effectDrawers.get(particle.effect) : void 0;
    effectDrawer?.particleInit?.(container, particle);
    shapeDrawer?.particleInit?.(container, particle);
  }
  function runParticleCreatedPlugins(container, particle) {
    for (const plugin of container.particleCreatedPlugins) {
      plugin.particleCreated?.(particle);
    }
  }
  var Particle;
  var init_Particle = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Particle.js"() {
      init_ErrorUtils();
      init_Vectors();
      init_ColorUtils();
      init_MathUtils();
      init_Utils();
      init_Constants();
      init_EventType();
      init_MoveDirection();
      init_OutMode();
      init_OutModeDirection();
      init_ParticleOutType();
      init_ParticlesOptionsLoader();
      Particle = class {
        backColor;
        destroyed;
        direction;
        effect;
        effectClose;
        effectData;
        fillColor;
        fillEnabled;
        fillOpacity;
        group;
        id;
        ignoresResizeRatio;
        initialPosition;
        initialVelocity;
        isRotating;
        justWarped;
        lastPathTime;
        misplaced;
        moveCenter;
        offset;
        opacity;
        options;
        outType;
        pathRotation;
        position;
        randomIndexData;
        retina;
        roll;
        rotation;
        shape;
        shapeClose;
        shapeData;
        sides;
        size;
        spawning;
        strokeColor;
        strokeOpacity;
        strokeWidth;
        unbreakable;
        velocity;
        zIndexFactor;
        #cachedOpacityData = {
          fillOpacity: defaultOpacity,
          opacity: defaultOpacity,
          strokeOpacity: defaultOpacity
        };
        #cachedPosition = Vector3d.origin;
        #cachedRotateData = { sin: 0, cos: 0 };
        #cachedTransform = {
          a: 1,
          b: 0,
          c: 0,
          d: 1
        };
        #container;
        #modifiers = [];
        #pluginManager;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
        }
        addModifier(modifier) {
          this.#modifiers.push(modifier);
          this.#modifiers.sort((a, b) => a.priority - b.priority);
        }
        clearModifiers() {
          this.#modifiers.length = 0;
        }
        destroy(override) {
          if (this.unbreakable || this.destroyed) {
            return;
          }
          this.destroyed = true;
          this.clearModifiers();
          const container = this.#container, shapeDrawer = this.shape ? container.shapeDrawers.get(this.shape) : void 0;
          shapeDrawer?.particleDestroy?.(this);
          for (const plugin of container.particleDestroyedPlugins) {
            plugin.particleDestroyed?.(this, override);
          }
          for (const updater of container.particleUpdaters) {
            updater.particleDestroyed?.(this, override);
          }
          this.#container.dispatchEvent(EventType.particleDestroyed, {
            particle: this
          });
        }
        draw(delta) {
          const container = this.#container, render = container.canvas.render;
          render.drawParticlePlugins(this, delta);
          render.drawParticle(this, delta);
        }
        getAngle() {
          return this.rotation + (this.pathRotation ? this.velocity.angle : defaultAngle);
        }
        getFillColor() {
          return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.fillColor), (m) => m.fillColor));
        }
        getMass() {
          return this.getRadius() ** squareExp * Math.PI * half;
        }
        getModifier(id) {
          return this.#modifiers.find((m) => m.id === id);
        }
        getOpacity() {
          const zIndexOptions = this.options.zIndex, zIndexFactor = zIndexFactorOffset - this.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, baseOpacity = getRangeValue(this.opacity?.value ?? defaultOpacity), modifierOpacity = this.#applyModifiers(void 0, (m) => m.opacity), opacity = modifierOpacity ?? baseOpacity;
          this.#cachedOpacityData.fillOpacity = this.fillOpacity ?? defaultOpacity;
          this.#cachedOpacityData.opacity = opacity * zOpacityFactor;
          this.#cachedOpacityData.strokeOpacity = this.strokeOpacity ?? defaultOpacity;
          return this.#cachedOpacityData;
        }
        getPosition() {
          this.#cachedPosition.x = this.position.x + this.offset.x;
          this.#cachedPosition.y = this.position.y + this.offset.y;
          this.#cachedPosition.z = this.position.z;
          return this.#cachedPosition;
        }
        getRadius() {
          return this.#applyModifiers(this.size.value, (m) => m.radius);
        }
        getRotateData() {
          const angle = this.getAngle();
          this.#cachedRotateData.sin = Math.sin(angle);
          this.#cachedRotateData.cos = Math.cos(angle);
          return this.#cachedRotateData;
        }
        getStrokeColor() {
          return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.strokeColor), (m) => m.strokeColor));
        }
        getTransformData(externalTransform) {
          const rotateData = this.getRotateData(), rotating = this.isRotating;
          this.#cachedTransform.a = rotateData.cos * (externalTransform.a ?? defaultTransform.a);
          this.#cachedTransform.b = rotating ? rotateData.sin * (externalTransform.b ?? identity) : externalTransform.b ?? defaultTransform.b;
          this.#cachedTransform.c = rotating ? -rotateData.sin * (externalTransform.c ?? identity) : externalTransform.c ?? defaultTransform.c;
          this.#cachedTransform.d = rotateData.cos * (externalTransform.d ?? defaultTransform.d);
          return this.#cachedTransform;
        }
        init(id, position, overrideOptions, group) {
          const container = this.#container;
          initParticleState(this, id, group);
          this.options = resolveParticleOptions(this, container, this.#pluginManager, overrideOptions);
          container.retina.initParticle(this);
          runUpdaterPreInit(container.particleUpdaters, this);
          this.#initPosition(position);
          this.initialVelocity = this.#calculateVelocity();
          this.velocity = this.initialVelocity.copy();
          this.zIndexFactor = this.position.z / container.zLayers;
          this.sides = 24;
          initParticleDrawers(this, container);
          this.spawning = false;
          runUpdaterInit(container.particleUpdaters, this);
          runDrawerInit(container, this);
          runParticleCreatedPlugins(container, this);
        }
        isInsideCanvas(direction) {
          return this.#getInsideCanvasResult(direction).inside;
        }
        isInsideCanvasForOutMode(outMode, direction) {
          return this.#getInsideCanvasResult(direction, outMode).inside;
        }
        isShowingBack() {
          if (!this.roll) {
            return false;
          }
          const angle = this.roll.angle;
          if (this.roll.horizontal && this.roll.vertical) {
            const adjustedAngle = normalizeAngle(angle, doublePI);
            return adjustedAngle >= Math.PI * half && adjustedAngle < Math.PI * triple * half;
          }
          if (this.roll.horizontal) {
            const adjustedAngle = normalizeAngle(angle + Math.PI * half, doublePI);
            return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * double;
          }
          if (this.roll.vertical) {
            const adjustedAngle = normalizeAngle(angle, doublePI);
            return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * double;
          }
          return false;
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas();
        }
        removeModifier(id) {
          const idx = this.#modifiers.findIndex((m) => m.id === id);
          if (idx >= defaultAngle) {
            this.#modifiers.splice(idx, identity);
          }
        }
        reset() {
          for (const updater of this.#container.particleUpdaters) {
            updater.reset?.(this);
          }
        }
        #applyModifiers(base, getter) {
          let value = base;
          for (const mod of this.#modifiers) {
            if (mod.enabled) {
              const override = getter(mod);
              if (override !== void 0) {
                value = override;
              }
            }
          }
          return value;
        }
        #calcPosition(position, zIndex) {
          let tryCount = defaultRetryCount, posVec = position ? Vector3d.create(position.x, position.y, zIndex) : void 0;
          const container = this.#container, plugins = container.particlePositionPlugins, outModes = this.options.move.outModes, radius = this.getRadius(), canvasSize = container.canvas.size;
          for (; ; ) {
            for (const plugin of plugins) {
              const pluginPos = plugin.particlePosition?.(posVec, this);
              if (pluginPos) {
                return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
              }
            }
            const exactPosition = calcExactPositionOrRandomFromSize({
              size: canvasSize,
              position: posVec
            }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex);
            this.#fixHorizontal(pos, radius, outModes.left ?? outModes.default);
            this.#fixHorizontal(pos, radius, outModes.right ?? outModes.default);
            this.#fixVertical(pos, radius, outModes.top ?? outModes.default);
            this.#fixVertical(pos, radius, outModes.bottom ?? outModes.default);
            let isValidPosition = true;
            for (const plugin of container.particles.checkParticlePositionPlugins) {
              isValidPosition = plugin.checkParticlePosition?.(this, pos, tryCount) ?? true;
              if (!isValidPosition) {
                break;
              }
            }
            if (isValidPosition) {
              return pos;
            }
            tryCount += tryCountIncrement;
            posVec = void 0;
          }
        }
        #calculateVelocity() {
          const moveOptions = this.options.move, baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy();
          if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) {
            return res;
          }
          const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
            left: radOffset - rad * half,
            right: radOffset + rad * half
          };
          if (!moveOptions.straight) {
            res.angle += randomInRangeValue(setRangeValue(range.left, range.right));
          }
          if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= getRandom();
          }
          return res;
        }
        #fixHorizontal(pos, radius, outMode) {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.x,
            maxCoord: this.#container.canvas.size.width,
            setCb: (value) => pos.x += value,
            radius
          });
        }
        #fixVertical(pos, radius, outMode) {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.y,
            maxCoord: this.#container.canvas.size.height,
            setCb: (value) => pos.y += value,
            radius
          });
        }
        #getDefaultInsideCanvasResult(direction, outMode) {
          const radius = this.getRadius(), canvasSize = this.#container.canvas.size, isBounce = outMode === OutMode.bounce || outMode === OutMode.split, position = isBounce ? this.getPosition() : this.position;
          if (direction === OutModeDirection.bottom) {
            return {
              inside: isBounce ? position.y + radius < canvasSize.height : position.y - radius < canvasSize.height,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.left) {
            return {
              inside: isBounce ? position.x - radius > defaultAngle : position.x + radius > defaultAngle,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.right) {
            return {
              inside: isBounce ? position.x + radius < canvasSize.width : position.x - radius < canvasSize.width,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.top) {
            return {
              inside: isBounce ? position.y - radius > defaultAngle : position.y + radius > defaultAngle,
              reason: "default"
            };
          }
          return {
            inside: position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius,
            reason: "default"
          };
        }
        #getInsideCanvasCallbackData(direction, outMode) {
          return {
            canvasSize: this.#container.canvas.size,
            direction,
            outMode,
            particle: this,
            radius: this.getRadius()
          };
        }
        #getInsideCanvasResult(direction, outMode) {
          const defaultResult = this.#getDefaultInsideCanvasResult(direction, outMode), container = this.#container, shapeDrawer = this.shape ? container.shapeDrawers.get(this.shape) : void 0, effectDrawer = this.effect ? container.effectDrawers.get(this.effect) : void 0;
          if (!shapeDrawer?.isInsideCanvas && !effectDrawer?.isInsideCanvas) {
            return defaultResult;
          }
          const callbackData = this.#getInsideCanvasCallbackData(direction, outMode), shapeResult = shapeDrawer?.isInsideCanvas ? this.#normalizeInsideCanvasResult(shapeDrawer.isInsideCanvas(callbackData), "shape") : void 0, effectResult = effectDrawer?.isInsideCanvas ? this.#normalizeInsideCanvasResult(effectDrawer.isInsideCanvas(callbackData), "effect") : void 0;
          if (shapeResult && effectResult) {
            const margin = Math.max(shapeResult.margin ?? defaultAngle, effectResult.margin ?? defaultAngle), useUnion = outMode === OutMode.destroy || outMode === OutMode.out;
            return {
              inside: useUnion ? shapeResult.inside || effectResult.inside : shapeResult.inside && effectResult.inside,
              margin: margin > defaultAngle ? margin : void 0,
              reason: "combined"
            };
          }
          return shapeResult ?? effectResult ?? defaultResult;
        }
        #getRollColor(color) {
          if (!color || !this.roll || !this.backColor && !this.roll.alter) {
            return color;
          }
          if (!this.isShowingBack()) {
            return color;
          }
          if (this.backColor) {
            return this.backColor;
          }
          if (this.roll.alter) {
            return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
          }
          return color;
        }
        #initPosition(position) {
          const container = this.#container, zIndexValue = Math.floor(getRangeValue(this.options.zIndex.value)), initialPosition = this.#calcPosition(position, clamp(zIndexValue, minZ, container.zLayers));
          if (!initialPosition) {
            throw new Error(getErrorMessage(ErrorCodes.particlePositionNotFound));
          }
          this.position = initialPosition;
          this.initialPosition = this.position.copy();
          const canvasSize = container.canvas.size;
          this.moveCenter = {
            ...getPosition(this.options.move.center, canvasSize),
            radius: this.options.move.center.radius,
            mode: this.options.move.center.mode
          };
          this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
          switch (this.options.move.direction) {
            case MoveDirection.inside:
              this.outType = ParticleOutType.inside;
              break;
            case MoveDirection.outside:
              this.outType = ParticleOutType.outside;
              break;
            default:
              break;
          }
          this.offset = Vector.origin;
        }
        #normalizeInsideCanvasResult(result, reason) {
          if (typeof result === "boolean") {
            return {
              inside: result,
              reason
            };
          }
          return {
            inside: result.inside,
            margin: result.margin,
            reason: result.reason ?? reason
          };
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/RangeType.js
  var RangeType;
  var init_RangeType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/RangeType.js"() {
      (function(RangeType2) {
        RangeType2["circle"] = "circle";
        RangeType2["rectangle"] = "rectangle";
      })(RangeType || (RangeType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js
  var BaseRange, Circle, Rectangle;
  var init_Ranges = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js"() {
      init_RangeType();
      init_MathUtils();
      init_Constants();
      BaseRange = class {
        position;
        type;
        constructor(x, y, type) {
          this.position = {
            x,
            y
          };
          this.type = type;
        }
        _resetPosition(x, y) {
          this.position.x = x;
          this.position.y = y;
        }
      };
      Circle = class _Circle extends BaseRange {
        radius;
        constructor(x, y, radius) {
          super(x, y, RangeType.circle);
          this.radius = radius;
        }
        contains(point) {
          return checkDistance(point, this.position, this.radius);
        }
        intersects(range) {
          const pos1 = this.position, pos2 = range.position, r = this.radius, dx = Math.abs(pos2.x - pos1.x), dy = Math.abs(pos2.y - pos1.y);
          if (range instanceof _Circle || range.type === RangeType.circle) {
            const circleRange = range, rSum = r + circleRange.radius, dist = Math.hypot(dx, dy);
            return rSum > dist;
          } else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
            const rectRange = range, { width, height } = rectRange.size, edges = Math.pow(dx - width, squareExp) + Math.pow(dy - height, squareExp);
            return edges <= r ** squareExp || dx <= r + width && dy <= r + height || dx <= width || dy <= height;
          }
          return false;
        }
        reset(x, y, radius) {
          this._resetPosition(x, y);
          this.radius = radius;
          return this;
        }
      };
      Rectangle = class _Rectangle extends BaseRange {
        size;
        constructor(x, y, width, height) {
          super(x, y, RangeType.rectangle);
          this.size = {
            height,
            width
          };
        }
        contains(point) {
          const w = this.size.width, h = this.size.height, pos = this.position;
          return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
        }
        intersects(range) {
          if (range instanceof Circle) {
            return range.intersects(this);
          }
          if (!(range instanceof _Rectangle)) {
            return false;
          }
          const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range.size, w2 = size2.width, h2 = size2.height;
          return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
        }
        reset(x, y, width, height) {
          this._resetPosition(x, y);
          this.size.width = width;
          this.size.height = height;
          return this;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/SpatialHashGrid.js
  var SpatialHashGrid;
  var init_SpatialHashGrid = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/SpatialHashGrid.js"() {
      init_Ranges();
      SpatialHashGrid = class {
        #cells = /* @__PURE__ */ new Map();
        #cellSize;
        #circlePool = [];
        #circlePoolIdx;
        #pendingCellSize;
        #rectanglePool = [];
        #rectanglePoolIdx;
        constructor(cellSize) {
          this.#cellSize = cellSize;
          this.#circlePoolIdx = 0;
          this.#rectanglePoolIdx = 0;
        }
        get cellSize() {
          return this.#cellSize;
        }
        set cellSize(value) {
          this.#pendingCellSize = value;
        }
        clear() {
          this.#cells.clear();
          const pendingCellSize = this.#pendingCellSize;
          if (pendingCellSize) {
            this.#cellSize = pendingCellSize;
          }
          this.#pendingCellSize = void 0;
        }
        insert(particle) {
          const { x, y } = particle.getPosition(), key = this.#cellKeyFromCoords(x, y);
          if (!this.#cells.has(key)) {
            this.#cells.set(key, []);
          }
          this.#cells.get(key)?.push(particle);
        }
        query(range, check, out = []) {
          const bounds = this.#getRangeBounds(range);
          if (!bounds) {
            return out;
          }
          const minCellX = Math.floor(bounds.minX / this.#cellSize), maxCellX = Math.floor(bounds.maxX / this.#cellSize), minCellY = Math.floor(bounds.minY / this.#cellSize), maxCellY = Math.floor(bounds.maxY / this.#cellSize);
          for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
              this.#queryCell(cx, cy, range, check, out);
            }
          }
          return out;
        }
        queryCircle(position, radius, check, out = []) {
          const circle = this.#acquireCircle(position.x, position.y, radius);
          try {
            return this.query(circle, check, out);
          } finally {
            this.#circlePoolIdx--;
          }
        }
        queryRectangle(position, size, check, out = []) {
          const rect = this.#acquireRectangle(position.x, position.y, size.width, size.height);
          try {
            return this.query(rect, check, out);
          } finally {
            this.#rectanglePoolIdx--;
          }
        }
        #acquireCircle(x, y, r) {
          const idx = this.#circlePoolIdx++;
          let circle = this.#circlePool[idx];
          if (!circle) {
            circle = new Circle(x, y, r);
            this.#circlePool[idx] = circle;
          }
          return circle.reset(x, y, r);
        }
        #acquireRectangle(x, y, w, h) {
          const idx = this.#rectanglePoolIdx++;
          let rectangle = this.#rectanglePool[idx];
          if (!rectangle) {
            rectangle = new Rectangle(x, y, w, h);
            this.#rectanglePool[idx] = rectangle;
          }
          return rectangle.reset(x, y, w, h);
        }
        #cellKeyFromCoords(x, y) {
          const cellX = Math.floor(x / this.#cellSize), cellY = Math.floor(y / this.#cellSize);
          return `${cellX}_${cellY}`;
        }
        #getRangeBounds(range) {
          if (range instanceof Circle) {
            const r = range.radius, { x, y } = range.position;
            return {
              minX: x - r,
              maxX: x + r,
              minY: y - r,
              maxY: y + r
            };
          }
          if (range instanceof Rectangle) {
            const { x, y } = range.position, { width, height } = range.size;
            return {
              minX: x,
              maxX: x + width,
              minY: y,
              maxY: y + height
            };
          }
          return null;
        }
        #queryCell(cx, cy, range, check, out) {
          const cellParticles = this.#cells.get(`${cx}_${cy}`);
          if (!cellParticles) {
            return;
          }
          for (const p of cellParticles) {
            if (check && !check(p)) {
              continue;
            }
            if (range.contains(p.getPosition())) {
              out.push(p);
            }
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/ParticlesManager.js
  var ParticlesManager;
  var init_ParticlesManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/ParticlesManager.js"() {
      init_Constants();
      init_EventType();
      init_LimitMode();
      init_Particle();
      init_SpatialHashGrid();
      init_LogUtils();
      init_ParticlesOptionsLoader();
      init_TypeUtils();
      ParticlesManager = class {
        checkParticlePositionPlugins;
        #array;
        #container;
        #grid;
        #groupLimits;
        #limit;
        #nextId;
        #particleBuckets;
        #particleResetPlugins;
        #particleUpdatePlugins;
        #pluginManager;
        #pool;
        #postParticleUpdatePlugins;
        #postUpdatePlugins;
        #resizeFactor;
        #updatePlugins;
        #zBuckets;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#nextId = 0;
          this.#array = [];
          this.#pool = [];
          this.#limit = 0;
          this.#groupLimits = /* @__PURE__ */ new Map();
          this.#particleBuckets = /* @__PURE__ */ new Map();
          this.#zBuckets = this.#createBuckets(this.#container.zLayers);
          this.#grid = new SpatialHashGrid(spatialHashGridCellSize);
          this.checkParticlePositionPlugins = [];
          this.#particleResetPlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#updatePlugins = [];
        }
        get count() {
          return this.#array.length;
        }
        get grid() {
          return this.#grid;
        }
        addParticle(position, overrideOptions, group, initializer) {
          if (this.#checkAndApplyLimits(group, this.count)) {
            return;
          }
          try {
            const particle = this.#pool.pop() ?? new Particle(this.#pluginManager, this.#container);
            particle.init(this.#nextId, position, overrideOptions, group);
            let canAdd = true;
            if (initializer) {
              canAdd = initializer(particle);
            }
            if (!canAdd) {
              this.#pool.push(particle);
              return;
            }
            this.#array.push(particle);
            this.#insertParticleIntoBucket(particle);
            this.#nextId++;
            this.#container.dispatchEvent(EventType.particleAdded, {
              particle
            });
            return particle;
          } catch (e) {
            getLogger().warning(`error adding particle: ${e}`);
          }
          return void 0;
        }
        clear() {
          this.#array = [];
          this.#particleBuckets.clear();
          this.#resetBuckets(this.#container.zLayers);
        }
        destroy() {
          this.#array = [];
          this.#pool.length = 0;
          this.#particleBuckets.clear();
          this.#zBuckets = [];
          this.checkParticlePositionPlugins = [];
          this.#particleResetPlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#updatePlugins = [];
        }
        drawParticles(delta) {
          for (let i = this.#zBuckets.length - one; i >= minIndex; i--) {
            const bucket = this.#zBuckets[i];
            if (!bucket) {
              continue;
            }
            for (const particle of bucket) {
              particle.draw(delta);
            }
          }
        }
        filter(condition) {
          return this.#array.filter(condition);
        }
        find(condition) {
          return this.#array.find(condition);
        }
        get(index) {
          return this.#array[index];
        }
        async init() {
          const container = this.#container;
          this.checkParticlePositionPlugins = [];
          this.#updatePlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#particleResetPlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#particleBuckets.clear();
          this.#resetBuckets(container.zLayers);
          this.#grid = new SpatialHashGrid(spatialHashGridCellSize * container.retina.pixelRatio);
          this.#applyLimits(container.actualOptions.particles);
          const particlesOptions = container.actualOptions.particles, groups = particlesOptions.groups;
          for (const group in groups) {
            const groupData = groups[group];
            if (groupData) {
              this.#applyLimits(loadParticlesOptions(this.#pluginManager, this.#container, groupData), group, groupData);
            }
          }
          await this.#initPlugins();
        }
        push(nb, position, overrideOptions, group) {
          for (let i = 0; i < nb; i++) {
            this.addParticle(position, overrideOptions, group);
          }
        }
        async redraw() {
          this.clear();
          await this.init();
          this.#container.canvas.render.drawParticles({ value: 0, factor: 0 });
        }
        remove(particle, group, override) {
          this.removeAt(this.#array.indexOf(particle), void 0, group, override);
        }
        removeAt(index, quantity = defaultRemoveQuantity, group, override, matchGroup = true) {
          if (index < minIndex || index > this.count) {
            return;
          }
          let deleted = 0;
          for (let i = index; deleted < quantity && i < this.count; i++) {
            if (this.#removeParticle(i, group, override, matchGroup)) {
              i--;
              deleted++;
            }
          }
        }
        removeQuantity(quantity, group) {
          this.removeAt(minIndex, quantity, group);
        }
        setDensity() {
          const options = this.#container.actualOptions, groups = options.particles.groups;
          let pluginsCount = 0;
          for (const plugin of this.#container.plugins) {
            if (plugin.particlesDensityCount) {
              pluginsCount += plugin.particlesDensityCount();
            }
          }
          for (const group in groups) {
            const groupData = groups[group];
            if (!groupData) {
              continue;
            }
            const groupDataOptions = loadParticlesOptions(this.#pluginManager, this.#container, groupData);
            this.#applyDensity(groupDataOptions, pluginsCount, group);
          }
          this.#applyDensity(options.particles, pluginsCount);
        }
        setResizeFactor(factor) {
          this.#resizeFactor = factor;
        }
        update(delta) {
          this.#grid.clear();
          for (const plugin of this.#updatePlugins) {
            plugin.update?.(delta);
          }
          const particlesToDelete = this.#updateParticlesPhase1(delta);
          for (const plugin of this.#postUpdatePlugins) {
            plugin.postUpdate?.(delta);
          }
          this.#updateParticlesPhase2(delta, particlesToDelete);
          if (particlesToDelete.size) {
            for (const particle of particlesToDelete) {
              this.remove(particle, particle.group);
            }
          }
          this.#resizeFactor = void 0;
        }
        #addToPool(...particles) {
          this.#pool.push(...particles);
        }
        #applyDensity(options, pluginsCount, group, groupOptions) {
          const numberOptions = options.number;
          if (!numberOptions.density.enable) {
            this.#applyLimits(options, group, groupOptions);
            return;
          }
          const densityFactor = this.#initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.round(Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + pluginsCount), particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
          if (group === void 0) {
            this.#limit = numberOptions.limit.value * densityFactor;
          } else {
            this.#groupLimits.set(group, {
              limit: numberOptions.limit.value * densityFactor,
              mode: toEnumValue(LimitMode, numberOptions.limit.mode, LimitMode.delete)
            });
          }
          if (particlesCount < particlesNumber) {
            this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
          } else if (particlesCount > particlesNumber) {
            this.removeQuantity(particlesCount - particlesNumber, group);
          }
        }
        #applyLimits(options, group, groupOptions) {
          if (group === void 0) {
            this.#limit = options.number.limit.value;
            const groups = this.#container.actualOptions.particles.groups;
            for (const existingGroup of this.#groupLimits.keys()) {
              if (!(existingGroup in groups)) {
                this.#groupLimits.delete(existingGroup);
              }
            }
          } else {
            const limitValue = groupOptions?.number?.limit?.value ?? options.number.limit.value;
            if (limitValue > minLimit) {
              this.#groupLimits.set(group, {
                limit: limitValue,
                mode: toEnumValue(LimitMode, groupOptions?.number?.limit?.mode ?? options.number.limit.mode, LimitMode.delete)
              });
            } else {
              this.#groupLimits.delete(group);
            }
          }
        }
        #checkAndApplyLimits(group, currentCount) {
          const globalLimit = this.#limit, globalMode = this.#container.actualOptions.particles.number.limit.mode;
          if (globalLimit > minLimit && globalMode === LimitMode.wait && currentCount >= globalLimit) {
            return true;
          }
          const groupLimitEntry = group === void 0 ? void 0 : this.#groupLimits.get(group);
          if (groupLimitEntry && groupLimitEntry.limit > minLimit && groupLimitEntry.mode === LimitMode.wait) {
            const groupCount = this.filter((t) => t.group === group).length;
            if (groupCount >= groupLimitEntry.limit) {
              return true;
            }
          }
          if (groupLimitEntry && groupLimitEntry.limit > minLimit && groupLimitEntry.mode === LimitMode.delete) {
            const groupCountToRemove = this.filter((t) => t.group === group).length + countOffset - groupLimitEntry.limit;
            if (groupCountToRemove > minCount) {
              this.removeQuantity(groupCountToRemove, group);
            }
          }
          if (globalLimit > minLimit && globalMode === LimitMode.delete) {
            const globalCountToRemove = this.count + countOffset - globalLimit;
            if (globalCountToRemove > minCount) {
              this.#removeAny(globalCountToRemove);
            }
          }
          return false;
        }
        #createBuckets(zLayers) {
          const bucketCount = Math.max(Math.floor(zLayers), one);
          return Array.from({ length: bucketCount }, () => []);
        }
        #getBucketIndex(zIndex) {
          const maxBucketIndex = this.#zBuckets.length - one;
          if (maxBucketIndex <= minIndex) {
            return minIndex;
          }
          return Math.min(Math.max(Math.floor(zIndex), minIndex), maxBucketIndex);
        }
        #initDensityFactor(densityOptions) {
          const container = this.#container;
          if (!densityOptions.enable) {
            return defaultDensityFactor;
          }
          const canvasSize = container.canvas.size, pxRatio = container.retina.pixelRatio;
          if (!Number.isFinite(canvasSize.width) || !Number.isFinite(canvasSize.height) || canvasSize.width <= 0 || canvasSize.height <= 0 || !Number.isFinite(densityOptions.width) || !Number.isFinite(densityOptions.height) || densityOptions.width <= 0 || densityOptions.height <= 0 || !Number.isFinite(pxRatio) || pxRatio <= 0) {
            return defaultDensityFactor;
          }
          const densityFactor = canvasSize.width * canvasSize.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
          return Number.isFinite(densityFactor) && densityFactor >= 0 ? densityFactor : defaultDensityFactor;
        }
        async #initDrawersAndUpdaters() {
          const container = this.#container;
          await container.initDrawersAndUpdaters();
          container.canvas.render.initUpdaters();
          for (const drawer of container.effectDrawers.values()) {
            await drawer.init?.(container);
          }
          for (const drawer of container.shapeDrawers.values()) {
            await drawer.init?.(container);
          }
        }
        async #initPlugins() {
          await this.#initPluginsArrays();
          await this.#initDrawersAndUpdaters();
          let handled = false;
          const container = this.#container;
          for (const plugin of container.plugins) {
            handled = plugin.particlesInitialization?.() ?? handled;
            if (handled) {
              break;
            }
          }
          if (handled) {
            return;
          }
          const particlesOptions = container.actualOptions.particles, groups = particlesOptions.groups;
          for (const group in groups) {
            const groupOptions = groups[group];
            if (!groupOptions) {
              continue;
            }
            for (let i = this.count, j = 0; j < groupOptions.number.value && i < particlesOptions.number.value; i++, j++) {
              this.addParticle(void 0, groupOptions, group);
            }
          }
          for (let i = this.count; i < particlesOptions.number.value; i++) {
            this.addParticle();
          }
        }
        async #initPluginsArrays() {
          const container = this.#container;
          for (const plugin of container.plugins) {
            if (plugin.redrawInit) {
              await plugin.redrawInit();
            }
            if (plugin.checkParticlePosition) {
              this.checkParticlePositionPlugins.push(plugin);
            }
            if (plugin.update) {
              this.#updatePlugins.push(plugin);
            }
            if (plugin.particleUpdate) {
              this.#particleUpdatePlugins.push(plugin);
            }
            if (plugin.postUpdate) {
              this.#postUpdatePlugins.push(plugin);
            }
            if (plugin.particleReset) {
              this.#particleResetPlugins.push(plugin);
            }
            if (plugin.postParticleUpdate) {
              this.#postParticleUpdatePlugins.push(plugin);
            }
          }
        }
        #insertParticleIntoBucket(particle) {
          const bucketIndex = this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
          if (!bucket) {
            return;
          }
          bucket.push(particle);
          this.#particleBuckets.set(particle.id, bucketIndex);
        }
        #removeAny(quantity) {
          this.removeAt(minIndex, quantity, void 0, void 0, false);
        }
        #removeParticle(index, group, override, matchGroup = true) {
          const particle = this.#array[index];
          if (!particle) {
            return false;
          }
          if (matchGroup && particle.group !== group) {
            return false;
          }
          this.#array.splice(index, deleteCount);
          this.#removeParticleFromBucket(particle);
          particle.destroy(override);
          this.#container.dispatchEvent(EventType.particleRemoved, {
            particle
          });
          this.#addToPool(particle);
          return true;
        }
        #removeParticleFromBucket(particle) {
          const bucketIndex = this.#particleBuckets.get(particle.id) ?? this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
          if (!bucket) {
            this.#particleBuckets.delete(particle.id);
            return;
          }
          const idx = bucket.findIndex((p) => p.id === particle.id);
          if (idx >= minIndex) {
            bucket.splice(idx, deleteCount);
          }
          this.#particleBuckets.delete(particle.id);
        }
        #resetBuckets(zLayers) {
          const bucketCount = Math.max(Math.floor(zLayers), one);
          if (this.#zBuckets.length !== bucketCount) {
            this.#zBuckets = this.#createBuckets(bucketCount);
            return;
          }
          for (const bucket of this.#zBuckets) {
            bucket.length = minIndex;
          }
        }
        #updateParticleBucket(particle) {
          const newBucketIndex = this.#getBucketIndex(particle.position.z), currentBucketIndex = this.#particleBuckets.get(particle.id);
          if (currentBucketIndex === void 0) {
            this.#insertParticleIntoBucket(particle);
            return;
          }
          if (currentBucketIndex === newBucketIndex) {
            return;
          }
          const currentBucket = this.#zBuckets[currentBucketIndex];
          if (currentBucket) {
            const idx = currentBucket.findIndex((p) => p.id === particle.id);
            if (idx >= minIndex) {
              currentBucket.splice(idx, deleteCount);
            }
          }
          const newBucket = this.#zBuckets[newBucketIndex];
          if (!newBucket) {
            this.#particleBuckets.set(particle.id, newBucketIndex);
            return;
          }
          newBucket.push(particle);
          if (newBucket.length >= double) {
            const prev = newBucket[newBucket.length - double];
            if (prev && particle.id < prev.id) {
              newBucket.sort((a, b) => a.id - b.id);
            }
          }
          this.#particleBuckets.set(particle.id, newBucketIndex);
        }
        #updateParticlesPhase1(delta) {
          const particlesToDelete = /* @__PURE__ */ new Set(), resizeFactor = this.#resizeFactor;
          for (const particle of this.#array) {
            if (resizeFactor && !particle.ignoresResizeRatio) {
              particle.position.x *= resizeFactor.width;
              particle.position.y *= resizeFactor.height;
              particle.initialPosition.x *= resizeFactor.width;
              particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            for (const plugin of this.#particleResetPlugins) {
              plugin.particleReset?.(particle);
            }
            for (const plugin of this.#particleUpdatePlugins) {
              if (particle.destroyed) {
                break;
              }
              plugin.particleUpdate?.(particle, delta);
            }
            if (particle.destroyed) {
              particlesToDelete.add(particle);
              continue;
            }
            this.#grid.insert(particle);
          }
          return particlesToDelete;
        }
        #updateParticlesPhase2(delta, particlesToDelete) {
          for (const particle of this.#array) {
            if (particle.destroyed) {
              particlesToDelete.add(particle);
              continue;
            }
            for (const updater of this.#container.particleUpdaters) {
              updater.update(particle, delta);
            }
            if (!particle.spawning) {
              for (const plugin of this.#postParticleUpdatePlugins) {
                plugin.postParticleUpdate?.(particle, delta);
              }
            }
            this.#updateParticleBucket(particle);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Retina.js
  var Retina;
  var init_Retina = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Retina.js"() {
      init_Constants();
      init_MathUtils();
      Retina = class {
        pixelRatio;
        reduceFactor;
        #container;
        constructor(container) {
          this.#container = container;
          this.pixelRatio = defaultRatio;
          this.reduceFactor = defaultReduceFactor;
        }
        init() {
          const container = this.#container, options = container.actualOptions;
          this.pixelRatio = options.detectRetina ? devicePixelRatio : defaultRatio;
          this.reduceFactor = defaultReduceFactor;
          const ratio = this.pixelRatio, canvas = container.canvas, element = canvas.domElement;
          if (element) {
            canvas.size.width = element.offsetWidth * ratio;
            canvas.size.height = element.offsetHeight * ratio;
          }
        }
        initParticle(particle) {
          const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
          props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
          props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
          props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
          const maxDistance = props.maxDistance;
          maxDistance.horizontal = moveDistance.horizontal === void 0 ? void 0 : moveDistance.horizontal * ratio;
          maxDistance.vertical = moveDistance.vertical === void 0 ? void 0 : moveDistance.vertical * ratio;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Container.js
  var Container_exports = {};
  __export(Container_exports, {
    Container: () => Container
  });
  function guardCheck(container) {
    return !container.destroyed;
  }
  function updateDelta(delta, value, fpsLimit = defaultFps, smooth = false) {
    delta.value = value;
    delta.factor = smooth ? defaultFps / fpsLimit : defaultFps * value / millisecondsToSeconds;
  }
  function loadContainerOptions(pluginManager, container, ...sourceOptionsArr) {
    const options = new Options(pluginManager, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }
  var Container;
  var init_Container = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Container.js"() {
      init_MathUtils();
      init_Constants();
      init_Utils();
      init_CanvasManager();
      init_EventListeners();
      init_EventType();
      init_HdrMode();
      init_Options();
      init_ParticlesManager();
      init_Retina();
      init_LogUtils();
      init_OptionLoader();
      init_TypeUtils();
      Container = class {
        actualOptions;
        canvas;
        destroyed;
        effectDrawers;
        fpsLimit;
        hdr;
        hdrMode;
        id;
        pageHidden;
        particleCreatedPlugins;
        particleDestroyedPlugins;
        particlePositionPlugins;
        particles;
        particleUpdaters;
        peakNits;
        plugins;
        retina;
        shapeDrawers;
        started;
        zLayers;
        #delay;
        #delayResolve;
        #delayTimeout;
        #delta = { value: 0, factor: 0 };
        #dispatchCallback;
        #drawAnimationFrame;
        #duration;
        #eventListeners;
        #firstStart;
        #initialSourceOptions;
        #lastFrameTime;
        #lifeTime;
        #onDestroy;
        #options;
        #paused;
        #pluginManager;
        #smooth;
        #sourceOptions;
        #startCancel;
        #startGeneration = 0;
        #startPromise;
        constructor(params) {
          const { dispatchCallback, pluginManager, id, onDestroy, sourceOptions } = params;
          this.#pluginManager = pluginManager;
          this.#dispatchCallback = dispatchCallback;
          this.#onDestroy = onDestroy;
          this.id = Symbol(id);
          this.fpsLimit = 120;
          this.hdr = false;
          this.hdrMode = HdrMode.standard;
          this.peakNits = 400;
          this.#smooth = false;
          this.#delay = 0;
          this.#duration = 0;
          this.#lifeTime = 0;
          this.#firstStart = true;
          this.started = false;
          this.destroyed = false;
          this.#paused = true;
          this.#lastFrameTime = 0;
          this.zLayers = 100;
          this.pageHidden = false;
          this.#sourceOptions = sourceOptions;
          this.#initialSourceOptions = sourceOptions;
          this.effectDrawers = /* @__PURE__ */ new Map();
          this.shapeDrawers = /* @__PURE__ */ new Map();
          this.particleUpdaters = [];
          this.retina = new Retina(this);
          this.canvas = new CanvasManager(this.#pluginManager, this);
          this.particles = new ParticlesManager(this.#pluginManager, this);
          this.plugins = [];
          this.particleDestroyedPlugins = [];
          this.particleCreatedPlugins = [];
          this.particlePositionPlugins = [];
          this.#options = loadContainerOptions(this.#pluginManager, this);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this);
          this.#eventListeners = new EventListeners(this);
          this.dispatchEvent(EventType.containerBuilt);
        }
        get animationStatus() {
          return !this.#paused && !this.pageHidden && guardCheck(this);
        }
        get options() {
          return this.#options;
        }
        get sourceOptions() {
          return this.#sourceOptions;
        }
        addLifeTime(value) {
          this.#lifeTime += value;
        }
        alive() {
          return !this.#duration || this.#lifeTime <= this.#duration;
        }
        destroy(remove = true) {
          if (!guardCheck(this)) {
            return;
          }
          this.stop();
          this.particles.destroy();
          this.canvas.destroy();
          for (const [, effectDrawer] of this.effectDrawers) {
            effectDrawer.destroy?.(this);
          }
          for (const [, shapeDrawer] of this.shapeDrawers) {
            shapeDrawer.destroy?.(this);
          }
          for (const plugin of this.plugins) {
            plugin.destroy?.();
          }
          this.effectDrawers = /* @__PURE__ */ new Map();
          this.shapeDrawers = /* @__PURE__ */ new Map();
          this.particleUpdaters = [];
          this.plugins.length = 0;
          this.destroyed = true;
          this.#onDestroy(remove);
          this.dispatchEvent(EventType.containerDestroyed);
        }
        dispatchEvent(type, data) {
          this.#dispatchCallback(type, {
            container: this,
            data
          });
        }
        draw(force) {
          if (!guardCheck(this)) {
            return;
          }
          if (this.#drawAnimationFrame !== void 0) {
            if (!force) {
              return;
            }
            cancelAnimation(this.#drawAnimationFrame);
            this.#drawAnimationFrame = void 0;
          }
          let refreshTime = force;
          this.#drawAnimationFrame = animate((timestamp) => {
            this.#drawAnimationFrame = void 0;
            if (refreshTime) {
              this.#lastFrameTime = void 0;
              refreshTime = false;
            }
            this.#nextFrame(timestamp);
          });
        }
        async export(type, options = {}) {
          for (const plugin of this.plugins) {
            if (!plugin.export) {
              continue;
            }
            const res = await plugin.export(type, options);
            if (!res.supported) {
              continue;
            }
            return res.blob;
          }
          getLogger().error(`Export plugin with type ${type} not found`);
          return void 0;
        }
        async init() {
          if (!guardCheck(this)) {
            return;
          }
          const generation = this.#startGeneration, allContainerPlugins = /* @__PURE__ */ new Map();
          for (const plugin of this.#pluginManager.plugins) {
            const containerPlugin = await plugin.getPlugin(this);
            if (generation !== this.#startGeneration || this.destroyed) {
              return;
            }
            if (containerPlugin.preInit) {
              await containerPlugin.preInit();
              if (generation !== this.#startGeneration) {
                return;
              }
            }
            allContainerPlugins.set(plugin, containerPlugin);
          }
          await this.initDrawersAndUpdaters();
          if (generation !== this.#startGeneration) {
            return;
          }
          this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
          this.#initPlugins(allContainerPlugins);
          this.retina.init();
          this.canvas.init();
          this.updateActualOptions();
          this.canvas.initBackground();
          this.canvas.resize();
          const { delay, duration, fpsLimit, smooth, zLayers } = this.actualOptions, hdrOptions = this.actualOptions.hdr;
          this.hdrMode = toEnumValue(HdrMode, hdrOptions.mode, HdrMode.standard);
          this.peakNits = hdrOptions.peakNits;
          this.zLayers = zLayers;
          this.#duration = getRangeValue(duration) * millisecondsToSeconds;
          this.#delay = getRangeValue(delay) * millisecondsToSeconds;
          this.#lifeTime = 0;
          this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
          this.#smooth = smooth;
          for (const plugin of this.plugins) {
            await plugin.init?.();
            if (generation !== this.#startGeneration) {
              return;
            }
          }
          await this.particles.init();
          if (generation !== this.#startGeneration) {
            return;
          }
          this.dispatchEvent(EventType.containerInit);
          this.particles.setDensity();
          for (const plugin of this.plugins) {
            plugin.particlesSetup?.();
          }
          this.dispatchEvent(EventType.particlesSetup);
        }
        async initDrawersAndUpdaters() {
          const pluginManager = this.#pluginManager;
          this.effectDrawers = await getItemMapFromInitializer(this, pluginManager.initializers.effects);
          this.shapeDrawers = await getItemMapFromInitializer(this, pluginManager.initializers.shapes);
          this.particleUpdaters = await getItemsFromInitializer(this, pluginManager.initializers.updaters);
        }
        pause() {
          if (!guardCheck(this)) {
            return;
          }
          if (this.#drawAnimationFrame !== void 0) {
            cancelAnimation(this.#drawAnimationFrame);
            this.#drawAnimationFrame = void 0;
          }
          if (this.#paused) {
            return;
          }
          for (const plugin of this.plugins) {
            plugin.pause?.();
          }
          if (!this.pageHidden) {
            this.#paused = true;
          }
          this.dispatchEvent(EventType.containerPaused);
        }
        play(force) {
          if (!guardCheck(this)) {
            return;
          }
          const needsUpdate = this.#paused || force;
          if (this.#firstStart && !this.actualOptions.autoPlay) {
            this.#firstStart = false;
            return;
          }
          if (this.#paused) {
            this.#paused = false;
          }
          if (needsUpdate) {
            for (const plugin of this.plugins) {
              if (plugin.play) {
                plugin.play();
              }
            }
          }
          this.dispatchEvent(EventType.containerPlay);
          this.draw(needsUpdate ?? false);
        }
        async refresh() {
          if (!guardCheck(this)) {
            return;
          }
          this.stop();
          return this.start();
        }
        async reset(sourceOptions) {
          if (!guardCheck(this)) {
            return;
          }
          this.#initialSourceOptions = sourceOptions;
          this.#sourceOptions = sourceOptions;
          this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
          return this.refresh();
        }
        async start() {
          if (!guardCheck(this) || this.started) {
            return;
          }
          if (this.#startPromise) {
            return this.#startPromise;
          }
          const generation = ++this.#startGeneration;
          let cancel;
          const cancelled = new Promise((resolve) => {
            cancel = resolve;
          });
          this.#startCancel = cancel;
          this.#startPromise = (async () => {
            try {
              await Promise.race([this.init(), cancelled]);
              if (generation !== this.#startGeneration) {
                return;
              }
              this.started = true;
              await Promise.race([
                new Promise((resolve) => {
                  this.#delayResolve = resolve;
                  this.#delayTimeout = setTimeout(() => {
                    this.#delayTimeout = void 0;
                    this.#delayResolve = void 0;
                    resolve();
                  }, this.#delay);
                }),
                cancelled
              ]);
              if (generation !== this.#startGeneration || this.destroyed) {
                return;
              }
              this.#eventListeners.addListeners();
              const startPlugins = async () => {
                for (const plugin of this.plugins) {
                  if (generation !== this.#startGeneration) {
                    return;
                  }
                  await plugin.start?.();
                }
              };
              await Promise.race([startPlugins(), cancelled]);
              if (generation !== this.#startGeneration) {
                return;
              }
              this.dispatchEvent(EventType.containerStarted);
              this.play();
            } catch (error) {
              if (generation === this.#startGeneration && !this.destroyed) {
                this.stop();
              }
              throw error;
            } finally {
              if (generation === this.#startGeneration) {
                this.#startPromise = void 0;
                this.#startCancel = void 0;
              }
            }
          })();
          return this.#startPromise;
        }
        stop() {
          if (!guardCheck(this)) {
            return;
          }
          this.#startGeneration++;
          this.#startCancel?.();
          this.#startCancel = void 0;
          this.#startPromise = void 0;
          if (!this.started) {
            return;
          }
          if (this.#delayTimeout !== void 0) {
            clearTimeout(this.#delayTimeout);
            this.#delayTimeout = void 0;
            this.#delayResolve?.();
            this.#delayResolve = void 0;
          }
          this.#firstStart = true;
          this.started = false;
          this.#eventListeners.removeListeners();
          this.pause();
          this.particles.clear();
          this.canvas.stop();
          for (const plugin of this.plugins) {
            plugin.stop?.();
          }
          this.particleCreatedPlugins.length = 0;
          this.particleDestroyedPlugins.length = 0;
          this.particlePositionPlugins.length = 0;
          this.#sourceOptions = this.#options;
          this.dispatchEvent(EventType.containerStopped);
        }
        updateActualOptions() {
          let refresh = false;
          for (const plugin of this.plugins) {
            if (plugin.updateActualOptions) {
              refresh = plugin.updateActualOptions() || refresh;
            }
          }
          this.canvas.render.updateBackgroundElement();
          return refresh;
        }
        #initPlugins(allContainerPlugins) {
          this.plugins.length = 0;
          this.particleDestroyedPlugins.length = 0;
          this.particleCreatedPlugins.length = 0;
          this.particlePositionPlugins.length = 0;
          for (const [plugin, containerPlugin] of allContainerPlugins) {
            if (!plugin.needsPlugin(this.actualOptions)) {
              continue;
            }
            this.plugins.push(containerPlugin);
            if (containerPlugin.particleCreated) {
              this.particleCreatedPlugins.push(containerPlugin);
            }
            if (containerPlugin.particleDestroyed) {
              this.particleDestroyedPlugins.push(containerPlugin);
            }
            if (containerPlugin.particlePosition) {
              this.particlePositionPlugins.push(containerPlugin);
            }
          }
        }
        #nextFrame(timestamp) {
          try {
            if (!this.#smooth && this.#lastFrameTime !== void 0 && timestamp < this.#lastFrameTime + millisecondsToSeconds / this.fpsLimit) {
              this.draw(false);
              return;
            }
            this.#lastFrameTime ??= timestamp;
            updateDelta(this.#delta, timestamp - this.#lastFrameTime, this.fpsLimit, this.#smooth);
            this.addLifeTime(this.#delta.value);
            this.#lastFrameTime = timestamp;
            if (this.#delta.value > millisecondsToSeconds) {
              this.draw(false);
              return;
            }
            this.canvas.render.drawParticles(this.#delta);
            if (!this.alive()) {
              this.destroy();
              return;
            }
            if (this.animationStatus) {
              this.draw(false);
            }
          } catch (e) {
            getLogger().error("error in animation loop", e);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Engine.js
  var Engine;
  var init_Engine = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Engine.js"() {
      init_ErrorUtils();
      init_Utils();
      init_Constants();
      init_EventDispatcher();
      init_PluginManager();
      init_MathUtils();
      Engine = class {
        pluginManager = new PluginManager(this);
        #anonymousElementId = 0;
        #anonymousElementIds = /* @__PURE__ */ new WeakMap();
        #domArray = [];
        #eventDispatcher = new EventDispatcher();
        #initialized = false;
        #loadSequence = 0;
        #loadSequences = /* @__PURE__ */ new Map();
        get items() {
          return this.#domArray;
        }
        get version() {
          return "4.5.4";
        }
        addEventListener(type, listener) {
          this.#eventDispatcher.addEventListener(type, listener);
        }
        checkVersion(pluginVersion) {
          if (this.version === pluginVersion) {
            return;
          }
          throw new Error(getErrorMessage(ErrorCodes.engineVersionMismatch, this.version, pluginVersion));
        }
        dispatchEvent(type, args) {
          this.#eventDispatcher.dispatchEvent(type, args);
        }
        async init() {
          if (this.#initialized) {
            return;
          }
          await this.pluginManager.init();
          this.#initialized = true;
        }
        item(index) {
          const items = this.items, item = items[index];
          if (item?.destroyed) {
            items.splice(index, removeDeleteCount);
            return;
          }
          return item;
        }
        async load(params) {
          let domSourceElement;
          if (typeof HTMLElement !== "undefined" && params.element instanceof HTMLElement) {
            domSourceElement = params.element;
          }
          const id = params.id ?? (domSourceElement ? this.#getElementId(domSourceElement) : void 0) ?? `tsparticles${Math.floor(getRandom() * loadRandomFactor).toString()}`, loadSequence = ++this.#loadSequence;
          this.#loadSequences.set(id, loadSequence);
          try {
            await this.init();
            const { Container: Container2 } = await Promise.resolve().then(() => (init_Container(), Container_exports)), { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
            if (this.#loadSequences.get(id) !== loadSequence) {
              return void 0;
            }
            const currentOptions = itemFromSingleOrMultiple(options, index), { items } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container2({
              dispatchCallback: (eventType, args) => {
                this.dispatchEvent(eventType, args);
              },
              id,
              onDestroy: (remove) => {
                if (!remove) {
                  return;
                }
                const mainArr = this.items, idx = mainArr.indexOf(newItem);
                if (idx >= removeMinIndex) {
                  mainArr.splice(idx, removeDeleteCount);
                }
              },
              pluginManager: this.pluginManager,
              sourceOptions: currentOptions
            });
            if (oldIndex >= loadMinIndex) {
              const old = this.item(oldIndex), deleteCount2 = old ? one : none;
              if (old && !old.destroyed) {
                old.destroy(false);
              }
              items.splice(oldIndex, deleteCount2, newItem);
            } else {
              items.push(newItem);
            }
            const sourceCanvas = typeof OffscreenCanvas !== "undefined" && params.element instanceof OffscreenCanvas ? params.element : getCanvasFromContainer(getDomContainer(id, domSourceElement));
            newItem.canvas.loadCanvas(sourceCanvas);
            try {
              await newItem.start();
            } catch (error) {
              newItem.destroy(false);
              const failedIndex = items.indexOf(newItem);
              if (failedIndex >= loadMinIndex) {
                items.splice(failedIndex, removeDeleteCount);
              }
              throw error;
            }
            if (newItem.destroyed) {
              return void 0;
            }
            return newItem;
          } finally {
            if (this.#loadSequences.get(id) === loadSequence) {
              this.#loadSequences.delete(id);
            }
          }
        }
        async refresh(refresh = true) {
          if (!refresh) {
            return;
          }
          await Promise.all(this.items.map((t) => t.refresh()));
        }
        removeEventListener(type, listener) {
          this.#eventDispatcher.removeEventListener(type, listener);
        }
        #getAnonymousElementId(element) {
          let id = this.#anonymousElementIds.get(element);
          if (!id) {
            id = `tsparticles${Math.floor(getRandom() * loadRandomFactor).toString()}_${this.#anonymousElementId++}`;
            this.#anonymousElementIds.set(element, id);
          }
          return id;
        }
        #getElementId(element) {
          return element.id.length ? element.id : this.#getAnonymousElementId(element);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/initEngine.js
  function initEngine() {
    const existing = globalThis.tsParticles;
    if (existing?.pluginManager) {
      return existing;
    }
    return new Engine();
  }
  var init_initEngine = __esm({
    "node_modules/@tsparticles/engine/browser/initEngine.js"() {
      init_Engine();
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
  var RotateDirection;
  var init_RotateDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js"() {
      (function(RotateDirection2) {
        RotateDirection2["clockwise"] = "clockwise";
        RotateDirection2["counterClockwise"] = "counter-clockwise";
        RotateDirection2["random"] = "random";
      })(RotateDirection || (RotateDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
  var DestroyType;
  var init_DestroyType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js"() {
      (function(DestroyType2) {
        DestroyType2["none"] = "none";
        DestroyType2["max"] = "max";
        DestroyType2["min"] = "min";
      })(DestroyType || (DestroyType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
  var GradientType;
  var init_GradientType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js"() {
      (function(GradientType2) {
        GradientType2["linear"] = "linear";
        GradientType2["radial"] = "radial";
        GradientType2["random"] = "random";
      })(GradientType || (GradientType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/exports.js
  var init_exports = __esm({
    "node_modules/@tsparticles/engine/browser/exports.js"() {
      init_Constants();
      init_Ranges();
      init_Vectors();
      init_MoveDirection();
      init_RotateDirection();
      init_OutModeDirection();
      init_AnimationMode();
      init_HdrMode();
      init_LimitMode();
      init_OutMode();
      init_PixelMode();
      init_AlterType();
      init_DestroyType();
      init_GradientType();
      init_ParticleOutType();
      init_StartValueType();
      init_EventType();
      init_AnimationStatus();
      init_DrawLayer();
      init_AnimatableColor();
      init_AnimationOptions();
      init_Background();
      init_ColorAnimation();
      init_FullScreen();
      init_HDROptions();
      init_HslAnimation();
      init_Options();
      init_OptionsColor();
      init_ParticlesBounce();
      init_ParticlesBounceFactor();
      init_ParticlesOptions();
      init_Fill();
      init_Paint();
      init_Stroke();
      init_Move();
      init_MoveAngle();
      init_MoveCenter();
      init_MoveGravity();
      init_OutModes();
      init_MovePath();
      init_Spin();
      init_ParticlesNumber();
      init_ParticlesNumberLimit();
      init_ParticlesDensity();
      init_Shape();
      init_ZIndex();
      init_ResizeEvent();
      init_ValueWithRandom();
      init_ColorUtils();
      init_ErrorCodes();
      init_ErrorUtils();
      init_LogUtils();
      init_MathUtils();
      init_OptionLoader();
      init_ParticlesOptionsLoader();
      init_OptionsUtils();
      init_Utils();
      init_TypeUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/index.js
  var tsParticles;
  var init_browser = __esm({
    "node_modules/@tsparticles/engine/browser/index.js"() {
      init_initEngine();
      init_exports();
      tsParticles = initEngine();
    }
  });

  // node_modules/@tsparticles/engine/browser/browser.js
  var globalObject;
  var init_browser2 = __esm({
    "node_modules/@tsparticles/engine/browser/browser.js"() {
      init_LogUtils();
      init_MathUtils();
      init_browser();
      init_browser();
      globalObject = globalThis;
      globalObject.__tsParticlesInternals = globalObject.__tsParticlesInternals ?? {};
      globalObject.tsParticles = tsParticles;
      globalObject.getParticlesLogger = getLogger;
      globalObject.setParticlesLogger = setLogger;
      globalObject.getParticlesRandom = getRandom;
      globalObject.getParticlesRandomFn = getRandomFn;
      globalObject.setParticlesRandom = setRandom;
    }
  });

  // node_modules/@tsparticles/plugin-blend/browser/BlendPluginInstance.js
  var BlendPluginInstance_exports = {};
  __export(BlendPluginInstance_exports, {
    BlendPluginInstance: () => BlendPluginInstance
  });
  var BlendPluginInstance;
  var init_BlendPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-blend/browser/BlendPluginInstance.js"() {
      init_browser2();
      BlendPluginInstance = class {
        layer = DrawLayer.CanvasSetup;
        #container;
        #defaultCompositeValue;
        constructor(container) {
          this.#container = container;
        }
        drawParticleCleanup(context, particle) {
          if (!particle.options.blend?.enable) {
            return;
          }
          context.globalCompositeOperation = particle.originalBlendMode ?? defaultCompositeValue;
          particle.originalBlendMode = void 0;
        }
        drawParticleSetup(context, particle) {
          if (!particle.options.blend?.enable) {
            return;
          }
          particle.originalBlendMode = context.globalCompositeOperation;
          context.globalCompositeOperation = particle.options.blend.mode;
        }
        drawSettingsCleanup(context) {
          if (!this.#defaultCompositeValue) {
            return;
          }
          context.globalCompositeOperation = this.#defaultCompositeValue;
        }
        drawSettingsSetup(context) {
          const previousComposite = context.globalCompositeOperation, blend = this.#container.actualOptions.blend;
          this.#defaultCompositeValue = previousComposite;
          context.globalCompositeOperation = blend?.enable ? blend.mode : previousComposite;
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-move/browser/Utils.js
  function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) {
      return;
    }
    const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
    if ((hasHDistance || hasVDistance) && !particle.misplaced) {
      particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
      if (hDistance) {
        particle.velocity.x = particle.velocity.y * half - particle.velocity.x;
      }
      if (vDistance) {
        particle.velocity.y = particle.velocity.x * half - particle.velocity.y;
      }
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
      particle.misplaced = false;
    } else if (particle.misplaced) {
      const pos = particle.position, vel = particle.velocity;
      if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) {
        vel.x *= -getRandom();
      }
      if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) {
        vel.y *= -getRandom();
      }
    }
  }
  function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity;
    if (moveDrift && moveSpeed) {
      particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
    }
    if (gravityOptions?.enable && moveSpeed) {
      particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
    }
    const decay = particle.moveDecay;
    particle.velocity.multTo(decay ?? noDecay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
      velocity.y = gravityFactor * maxSpeed;
      if (moveSpeed) {
        particle.velocity.y = velocity.y / moveSpeed;
      }
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    velocity.multTo(reduceFactor);
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
      position.x += Math.sin(position.x * Math.cos(position.y)) * reduceFactor;
      position.y += Math.cos(position.y * Math.sin(position.x)) * reduceFactor;
    }
  }
  function spin(container, particle, moveSpeed, reduceFactor) {
    if (!particle.spin) {
      return;
    }
    const spinClockwise = particle.spin.direction === RotateDirection.clockwise, updateFunc = {
      x: spinClockwise ? Math.cos : Math.sin,
      y: spinClockwise ? Math.sin : Math.cos
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle) * reduceFactor;
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle) * reduceFactor;
    particle.spin.radius += particle.spin.acceleration * reduceFactor;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half;
    if (particle.spin.radius > halfMaxSize) {
      particle.spin.radius = halfMaxSize;
      particle.spin.acceleration *= -identity;
    } else if (particle.spin.radius < minSpinRadius) {
      particle.spin.radius = minSpinRadius;
      particle.spin.acceleration *= -identity;
    }
    particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
  }
  function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
      return;
    }
    const pathDelay = particle.pathDelay ?? defaultPathDelay;
    if (particle.lastPathTime <= pathDelay) {
      particle.lastPathTime += delta.value;
      return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) {
      particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
      particle.velocity.x = clamp(particle.velocity.x, -identity, identity);
      particle.velocity.y = clamp(particle.velocity.y, -identity, identity);
    }
    particle.lastPathTime -= pathDelay;
  }
  function getProximitySpeedFactor(particle) {
    const mod = particle.getModifier("slow");
    return mod?.enabled ? mod.speedFactor ?? identity : identity;
  }
  function initSpin(container, particle) {
    const options = particle.options, spinOptions = options.move.spin;
    if (!spinOptions.enable) {
      return;
    }
    const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinFactor2 = 0.01, spinCenter = {
      x: spinPos.x * spinFactor2 * container.canvas.size.width,
      y: spinPos.y * spinFactor2 * container.canvas.size.height
    }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
    particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
    particle.spin = {
      center: spinCenter,
      direction: particle.velocity.x >= minVelocity ? RotateDirection.clockwise : RotateDirection.counterClockwise,
      angle: getRandom() * doublePI,
      radius: distance,
      acceleration: particle.retina.spinAcceleration
    };
  }
  var moveSpeedFactor, minSpinRadius, spinFactor, defaultPathDelay, noDecay;
  var init_Utils2 = __esm({
    "node_modules/@tsparticles/plugin-move/browser/Utils.js"() {
      init_browser2();
      moveSpeedFactor = 60;
      minSpinRadius = 0;
      spinFactor = 0.01;
      defaultPathDelay = 0;
      noDecay = 1;
    }
  });

  // node_modules/@tsparticles/plugin-move/browser/MovePluginInstance.js
  var MovePluginInstance_exports = {};
  __export(MovePluginInstance_exports, {
    MovePluginInstance: () => MovePluginInstance
  });
  var defaultSizeFactor, defaultDeltaFactor, MovePluginInstance;
  var init_MovePluginInstance = __esm({
    "node_modules/@tsparticles/plugin-move/browser/MovePluginInstance.js"() {
      init_browser2();
      init_Utils2();
      defaultSizeFactor = 1;
      defaultDeltaFactor = 1;
      MovePluginInstance = class {
        availablePathGenerators;
        pathGenerators;
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.availablePathGenerators = /* @__PURE__ */ new Map();
          this.pathGenerators = /* @__PURE__ */ new Map();
        }
        destroy() {
          this.availablePathGenerators = /* @__PURE__ */ new Map();
          this.pathGenerators = /* @__PURE__ */ new Map();
        }
        isEnabled(particle) {
          return !particle.destroyed && particle.options.move.enable;
        }
        particleCreated(particle) {
          const options = particle.options, moveOptions = options.move, gravityOptions = moveOptions.gravity, pathOptions = moveOptions.path;
          particle.moveDecay = decayOffset - getRangeValue(moveOptions.decay);
          particle.pathDelay = getRangeValue(pathOptions.delay.value) * millisecondsToSeconds;
          if (pathOptions.generator) {
            let pathGenerator = this.pathGenerators.get(pathOptions.generator);
            if (!pathGenerator) {
              pathGenerator = this.availablePathGenerators.get(pathOptions.generator);
              if (pathGenerator) {
                this.pathGenerators.set(pathOptions.generator, pathGenerator);
                pathGenerator.init();
              }
            }
            particle.pathGenerator = pathGenerator;
          }
          particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: getRangeValue(gravityOptions.acceleration),
            inverse: gravityOptions.inverse
          };
          initSpin(this.#container, particle);
        }
        particleDestroyed(particle) {
          const pathGenerator = particle.pathGenerator;
          pathGenerator?.reset(particle);
        }
        particleUpdate(particle, delta) {
          const particleOptions = particle.options, moveOptions = particleOptions.move;
          if (!moveOptions.enable) {
            return;
          }
          const container = this.#container, slowFactor = getProximitySpeedFactor(particle), reduceFactor = container.retina.reduceFactor, baseSpeed = particle.retina.moveSpeed, moveDrift = particle.retina.moveDrift, maxSize = particle.size.max, sizeFactor2 = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor2 * slowFactor * deltaFactor * half, maxSpeed = particle.retina.maxSpeed;
          if (moveOptions.spin.enable) {
            spin(container, particle, moveSpeed, reduceFactor);
          } else {
            move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta);
          }
          applyDistance(particle);
        }
        preInit() {
          return this.#init();
        }
        redrawInit() {
          return this.#init();
        }
        update() {
          for (const pathGenerator of this.pathGenerators.values()) {
            pathGenerator.update();
          }
        }
        async #init() {
          const pluginManager = this.#pluginManager;
          if (!pluginManager.initializers.pathGenerators) {
            return;
          }
          this.availablePathGenerators = await getItemMapFromInitializer(this.#container, pluginManager.initializers.pathGenerators);
          this.pathGenerators = /* @__PURE__ */ new Map();
          for (const pathGenerator of this.pathGenerators.values()) {
            pathGenerator.init();
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js
  var EmitterLife;
  var init_EmitterLife = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js"() {
      init_browser2();
      EmitterLife = class {
        count;
        delay;
        duration;
        wait = false;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "count", data.count);
          loadRangeProperty(this, "delay", data.delay);
          loadRangeProperty(this, "duration", data.duration);
          loadProperty(this, "wait", data.wait);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js
  var EmitterRate;
  var init_EmitterRate = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js"() {
      init_browser2();
      EmitterRate = class {
        delay = 0.1;
        quantity = 1;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadRangeProperty(this, "quantity", data.quantity);
          loadRangeProperty(this, "delay", data.delay);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js
  var EmitterShapeReplace;
  var init_EmitterShapeReplace = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js"() {
      init_browser2();
      EmitterShapeReplace = class {
        color = false;
        opacity = false;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "color", data.color);
          loadProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js
  var EmitterShape;
  var init_EmitterShape = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js"() {
      init_browser2();
      init_EmitterShapeReplace();
      EmitterShape = class {
        options = {};
        replace = new EmitterShapeReplace();
        type = "square";
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (data.options !== void 0) {
            this.options = deepExtend({}, data.options ?? {});
          }
          this.replace.load(data.replace);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js
  var EmitterSize;
  var init_EmitterSize = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js"() {
      init_browser2();
      EmitterSize = class {
        height = 0;
        mode = PixelMode.percent;
        width = 0;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "height", data.height);
          loadProperty(this, "width", data.width);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSpawn.js
  var EmitterSpawn;
  var init_EmitterSpawn = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSpawn.js"() {
      init_browser2();
      EmitterSpawn = class {
        fill;
        stroke;
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (data.fill) {
            this.fill ??= new Fill();
            this.fill.load(data.fill);
          }
          if (data.stroke) {
            this.stroke ??= new Stroke();
            this.stroke.load(data.stroke);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js
  var Emitter;
  var init_Emitter = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js"() {
      init_browser2();
      init_EmitterLife();
      init_EmitterRate();
      init_EmitterShape();
      init_EmitterSize();
      init_EmitterSpawn();
      Emitter = class {
        autoPlay = true;
        direction;
        domId;
        draggable = false;
        draw = false;
        fill = true;
        life = new EmitterLife();
        name;
        particles;
        position;
        rate = new EmitterRate();
        shape = new EmitterShape();
        size;
        spawn = new EmitterSpawn();
        spawnFillColor;
        spawnStrokeColor;
        startCount = 0;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "autoPlay", data.autoPlay);
          if (data.size !== void 0) {
            this.size ??= new EmitterSize();
            this.size.load(data.size);
          }
          loadProperty(this, "direction", data.direction);
          loadProperty(this, "domId", data.domId);
          loadProperty(this, "draggable", data.draggable);
          loadProperty(this, "draw", data.draw);
          loadProperty(this, "fill", data.fill);
          this.life.load(data.life);
          loadProperty(this, "name", data.name);
          this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
            return deepExtend({}, particles);
          });
          this.rate.load(data.rate);
          this.shape.load(data.shape);
          this.spawn.load(data.spawn);
          if (data.position !== void 0) {
            this.position = {};
            if (data.position.x !== void 0) {
              this.position.x = setRangeValue(data.position.x);
            }
            if (data.position.y !== void 0) {
              this.position.y = setRangeValue(data.position.y);
            }
          }
          if (data.spawnFillColor !== void 0) {
            this.spawnFillColor ??= new AnimatableColor();
            this.spawnFillColor.load(data.spawnFillColor);
          }
          if (data.spawnStrokeColor !== void 0) {
            this.spawnStrokeColor ??= new AnimatableColor();
            this.spawnStrokeColor.load(data.spawnStrokeColor);
          }
          loadProperty(this, "startCount", data.startCount);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersPluginInstance.js
  var EmittersPluginInstance_exports = {};
  __export(EmittersPluginInstance_exports, {
    EmittersPluginInstance: () => EmittersPluginInstance
  });
  var EmittersPluginInstance;
  var init_EmittersPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmittersPluginInstance.js"() {
      init_browser2();
      EmittersPluginInstance = class {
        #container;
        #instancesManager;
        constructor(instancesManager, container) {
          this.#instancesManager = instancesManager;
          this.#container = container;
          this.#instancesManager.initContainer(container);
        }
        draw(context, _delta) {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.draw(context);
          }
        }
        async init() {
          const emittersOptions = this.#container.actualOptions.emitters;
          if (isArray(emittersOptions)) {
            for (const emitterOptions of emittersOptions) {
              await this.#instancesManager.addEmitter(this.#container, emitterOptions);
            }
          } else {
            await this.#instancesManager.addEmitter(this.#container, emittersOptions);
          }
        }
        pause() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.pause();
          }
        }
        play() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.play();
          }
        }
        resize() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.resize();
          }
        }
        stop() {
          this.#instancesManager.clear(this.#container);
        }
        update(delta) {
          this.#instancesManager.getArray(this.#container).forEach((emitter) => {
            emitter.update(delta);
          });
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/ShapeManager.js
  var ShapeManager_exports = {};
  __export(ShapeManager_exports, {
    ShapeManager: () => ShapeManager
  });
  var shapeGenerators, ShapeManager;
  var init_ShapeManager = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/ShapeManager.js"() {
      shapeGenerators = /* @__PURE__ */ new Map();
      ShapeManager = class {
        addShapeGenerator(name, generator) {
          if (!this.getShapeGenerator(name)) {
            shapeGenerators.set(name, generator);
          }
        }
        getShapeGenerator(name) {
          return shapeGenerators.get(name);
        }
        getSupportedShapeGenerators() {
          return shapeGenerators.keys();
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmitterInstance.js
  var EmitterInstance_exports = {};
  __export(EmitterInstance_exports, {
    EmitterInstance: () => EmitterInstance
  });
  function setParticlesOptionsFillColor(particlesOptions, color, opacity, enable) {
    const paint = particlesOptions.paint ??= new Paint();
    paint.fill = {
      color: AnimatableColor.create(void 0, { value: color }),
      enable,
      opacity
    };
  }
  function setParticlesOptionsStrokeColor(particlesOptions, color, opacity, width) {
    const paint = particlesOptions.paint ??= new Paint();
    paint.stroke = {
      color: AnimatableColor.create(void 0, { value: color }),
      opacity,
      width
    };
  }
  var defaultLifeDelay, minLifeCount, defaultSpawnDelay, defaultEmitDelay, defaultLifeCount, defaultColorAnimationFactor, colorFactor, defaultStrokeWidth, EmitterInstance;
  var init_EmitterInstance = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmitterInstance.js"() {
      init_browser2();
      init_Emitter();
      init_EmitterSize();
      defaultLifeDelay = 0;
      minLifeCount = 0;
      defaultSpawnDelay = 0;
      defaultEmitDelay = 0;
      defaultLifeCount = -1;
      defaultColorAnimationFactor = 1;
      colorFactor = 3.6;
      defaultStrokeWidth = 1;
      EmitterInstance = class {
        fill;
        name;
        options;
        position;
        size;
        spawnFillColor;
        spawnFillEnabled;
        spawnFillOpacity;
        spawnStrokeColor;
        spawnStrokeOpacity;
        spawnStrokeWidth;
        #container;
        #currentDuration;
        #currentEmitDelay;
        #currentSpawnDelay;
        #duration;
        #emitDelay;
        #firstSpawn;
        #immortal;
        #initialPosition;
        #lifeCount;
        #mutationObserver;
        #particlesOptions;
        #paused;
        #pluginManager;
        #positionOverride = false;
        #removeCallback;
        #resizeObserver;
        #shape;
        #size;
        #spawnDelay;
        #startParticlesAdded;
        constructor(pluginManager, container, removeCallback, options, position) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#removeCallback = removeCallback;
          this.#currentDuration = 0;
          this.#currentEmitDelay = 0;
          this.#currentSpawnDelay = 0;
          this.#initialPosition = position;
          if (options instanceof Emitter) {
            this.options = options;
          } else {
            this.options = new Emitter();
            this.options.load(options);
          }
          this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
          this.position = this.#initialPosition ?? this.#calcPosition();
          this.name = this.options.name;
          this.fill = this.options.fill;
          this.#firstSpawn = !this.options.life.wait;
          this.#startParticlesAdded = false;
          const particlesOptions = deepExtend({}, this.options.particles);
          particlesOptions.move ??= {};
          particlesOptions.move.direction ??= this.options.direction;
          if (this.options.spawn.fill?.color) {
            this.spawnFillColor = rangeColorToHsl(this.#pluginManager, this.options.spawn.fill.color);
          }
          if (this.options.spawn.stroke?.color) {
            this.spawnStrokeColor = rangeColorToHsl(this.#pluginManager, this.options.spawn.stroke.color);
          }
          const spawnFill = this.options.spawn.fill, spawnStroke = this.options.spawn.stroke;
          this.spawnFillOpacity = spawnFill?.opacity === void 0 ? defaultOpacity : getRangeValue(spawnFill.opacity);
          this.spawnStrokeOpacity = spawnStroke?.opacity === void 0 ? defaultOpacity : getRangeValue(spawnStroke.opacity);
          this.spawnStrokeWidth = spawnStroke?.width === void 0 ? defaultStrokeWidth : getRangeValue(spawnStroke.width);
          this.#paused = !this.options.autoPlay;
          this.#particlesOptions = particlesOptions;
          this.#size = this.#calcSize();
          this.size = this.#size.mode === PixelMode.percent ? {
            width: this.#size.width / percentDenominator * this.#container.canvas.size.width,
            height: this.#size.height / percentDenominator * this.#container.canvas.size.height
          } : { width: this.#size.width, height: this.#size.height };
          this.#lifeCount = this.options.life.count ?? defaultLifeCount;
          this.#immortal = this.#lifeCount <= minLifeCount;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              this.#mutationObserver = new MutationObserver(() => {
                this.resize();
              });
              this.#resizeObserver = new ResizeObserver(() => {
                this.resize();
              });
              this.#mutationObserver.observe(element, {
                attributes: true,
                attributeFilter: ["style", "width", "height"]
              });
              this.#resizeObserver.observe(element);
            }
          }
          const shapeOptions = this.options.shape, shapeGenerator = this.#pluginManager.emitterShapeManager?.getShapeGenerator(shapeOptions.type);
          if (shapeGenerator) {
            this.#shape = shapeGenerator.generate(this.#container, this.position, this.size, this.fill, shapeOptions.options);
          }
          this.#container.dispatchEvent("emitterCreated", {
            emitter: this
          });
          this.play();
        }
        draw(context) {
          if (!this.options.draw || !this.#shape) {
            return;
          }
          const container = this.#container, fillEnabled = this.options.spawn.fill?.enable ?? true;
          context.save();
          context.beginPath();
          if (fillEnabled) {
            context.fillStyle = this.spawnFillColor ? getStyleFromHsl(this.spawnFillColor, container.hdr, this.spawnFillOpacity ?? defaultOpacity, container.peakNits, container.hdrMode) : getStyleFromRgb({ r: 0, g: 0, b: 0 }, container.hdr, defaultOpacity, container.peakNits, container.hdrMode);
          }
          if (this.spawnStrokeColor) {
            context.strokeStyle = getStyleFromHsl(this.spawnStrokeColor, container.hdr, this.spawnStrokeOpacity ?? defaultOpacity, container.peakNits, container.hdrMode);
            context.lineWidth = this.spawnStrokeWidth ?? defaultStrokeWidth;
          }
          this.#shape.draw?.(context);
          if (fillEnabled) {
            context.fill();
          }
          if (this.spawnStrokeColor) {
            context.stroke();
          }
          context.restore();
        }
        externalPause() {
          this.#paused = true;
          this.pause();
        }
        externalPlay() {
          this.#paused = false;
          this.play();
        }
        async init() {
          await this.#shape?.init();
        }
        pause() {
          if (this.#paused) {
            return;
          }
          this.#emitDelay = void 0;
        }
        play() {
          if (this.#paused) {
            return;
          }
          if (!((this.#lifeCount > minLifeCount || this.#immortal || !this.options.life.count) && (this.#firstSpawn || this.#currentSpawnDelay >= (this.#spawnDelay ?? defaultSpawnDelay)))) {
            return;
          }
          const container = this.#container;
          if (this.#emitDelay === void 0) {
            const delay = getRangeValue(this.options.rate.delay);
            this.#emitDelay = container.retina.reduceFactor ? delay * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
          }
          if (this.#lifeCount > minLifeCount || this.#immortal) {
            this.#prepareToDie();
          }
        }
        resize() {
          const container = this.#container;
          if (!this.#positionOverride) {
            const initialPosition = this.#initialPosition;
            this.position = initialPosition && isPointInside(initialPosition, container.canvas.size, Vector.origin) ? initialPosition : this.#calcPosition();
          }
          this.#size = this.#calcSize();
          this.size = this.#size.mode === PixelMode.percent ? {
            width: this.#size.width / percentDenominator * container.canvas.size.width,
            height: this.#size.height / percentDenominator * container.canvas.size.height
          } : { width: this.#size.width, height: this.#size.height };
          this.#shape?.resize(this.position, this.size);
        }
        setPosition(position) {
          this.#positionOverride = true;
          this.position = { ...position };
          this.#shape?.resize(this.position, this.size);
        }
        update(delta) {
          if (this.#paused) {
            return;
          }
          const container = this.#container;
          if (this.#firstSpawn) {
            this.#firstSpawn = false;
            this.#currentSpawnDelay = this.#spawnDelay ?? defaultSpawnDelay;
            this.#currentEmitDelay = this.#emitDelay ?? defaultEmitDelay;
          }
          if (!this.#startParticlesAdded) {
            this.#startParticlesAdded = true;
            this.#emitParticles(this.options.startCount);
          }
          if (this.#duration !== void 0) {
            this.#currentDuration += delta.value;
            if (this.#currentDuration >= this.#duration) {
              this.pause();
              if (this.#spawnDelay !== void 0) {
                this.#spawnDelay = void 0;
              }
              if (!this.#immortal) {
                this.#lifeCount--;
              }
              if (this.#lifeCount > minLifeCount || this.#immortal) {
                if (!this.#positionOverride) {
                  this.position = this.#calcPosition();
                  this.#shape?.resize(this.position, this.size);
                }
                this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
              } else {
                this.#destroy();
              }
              this.#currentDuration -= this.#duration;
              this.#duration = void 0;
            }
          }
          if (this.#spawnDelay !== void 0) {
            this.#currentSpawnDelay += delta.value;
            if (this.#currentSpawnDelay >= this.#spawnDelay) {
              this.#container.dispatchEvent("emitterPlay");
              this.play();
              this.#currentSpawnDelay -= this.#spawnDelay;
              this.#spawnDelay = void 0;
            }
          }
          if (this.#emitDelay !== void 0) {
            this.#currentEmitDelay += delta.value;
            if (this.#currentEmitDelay >= this.#emitDelay) {
              this.#emit();
              this.#currentEmitDelay -= this.#emitDelay;
            }
          }
        }
        #calcPosition() {
          const container = this.#container;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              const elRect = element.getBoundingClientRect(), pxRatio = container.retina.pixelRatio;
              return {
                x: (elRect.x + elRect.width * half) * pxRatio,
                y: (elRect.y + elRect.height * half) * pxRatio
              };
            }
          }
          return calcPositionOrRandomFromSizeRanged({
            size: container.canvas.size,
            position: this.options.position
          });
        }
        #calcSize() {
          const container = this.#container;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              const elRect = element.getBoundingClientRect();
              return {
                width: elRect.width * container.retina.pixelRatio,
                height: elRect.height * container.retina.pixelRatio,
                mode: PixelMode.precise
              };
            }
          }
          return this.options.size ?? (() => {
            const size = new EmitterSize();
            size.load({
              height: 0,
              mode: PixelMode.percent,
              width: 0
            });
            return size;
          })();
        }
        #destroy() {
          this.#mutationObserver?.disconnect();
          this.#mutationObserver = void 0;
          this.#resizeObserver?.disconnect();
          this.#resizeObserver = void 0;
          this.#removeCallback(this);
          this.#container.dispatchEvent("emitterDestroyed", {
            emitter: this
          });
        }
        #emit() {
          if (this.#paused) {
            return;
          }
          const quantity = getRangeValue(this.options.rate.quantity);
          this.#emitParticles(quantity);
        }
        #emitParticles(quantity) {
          const singleParticlesOptions = itemFromSingleOrMultiple(this.#particlesOptions) ?? {}, fillHslAnimation = this.options.spawn.fill?.color?.animation, fillEnabled = this.options.spawn.fill?.enable ?? !!this.options.spawn.fill?.color, fillOpacity = this.options.spawn.fill?.opacity === void 0 ? defaultOpacity : getRangeValue(this.options.spawn.fill.opacity), strokeHslAnimation = this.options.spawn.stroke?.color?.animation, strokeOpacity = this.options.spawn.stroke?.opacity === void 0 ? defaultOpacity : getRangeValue(this.options.spawn.stroke.opacity), strokeWidth = this.options.spawn.stroke?.width === void 0 ? defaultStrokeWidth : getRangeValue(this.options.spawn.stroke.width), reduceFactor = this.#container.retina.reduceFactor, needsFillColorAnimation = !!fillHslAnimation, needsStrokeColorAnimation = !!strokeHslAnimation, needsShapeData = !!this.#shape, needsColorAnimation = needsFillColorAnimation || needsStrokeColorAnimation, needsCopy = needsColorAnimation || needsShapeData, maxValues = needsColorAnimation ? { h: hMax, s: sMax, l: lMax } : null, shapeOptions = this.options.shape;
          for (let i = 0; i < quantity * reduceFactor; i++) {
            const particlesOptions = needsCopy ? deepExtend({}, singleParticlesOptions) : singleParticlesOptions;
            this.spawnFillOpacity = fillOpacity;
            this.spawnFillEnabled = fillEnabled;
            this.spawnStrokeOpacity = strokeOpacity;
            this.spawnStrokeWidth = strokeWidth;
            if (this.spawnFillColor) {
              if (fillHslAnimation && maxValues) {
                this.spawnFillColor.h = this.#setColorAnimation(fillHslAnimation.h, this.spawnFillColor.h, maxValues.h, colorFactor);
                this.spawnFillColor.s = this.#setColorAnimation(fillHslAnimation.s, this.spawnFillColor.s, maxValues.s);
                this.spawnFillColor.l = this.#setColorAnimation(fillHslAnimation.l, this.spawnFillColor.l, maxValues.l);
              }
              setParticlesOptionsFillColor(particlesOptions, this.spawnFillColor, this.spawnFillOpacity, this.spawnFillEnabled);
            }
            if (this.spawnStrokeColor) {
              if (strokeHslAnimation && maxValues) {
                this.spawnStrokeColor.h = this.#setColorAnimation(strokeHslAnimation.h, this.spawnStrokeColor.h, maxValues.h, colorFactor);
                this.spawnStrokeColor.s = this.#setColorAnimation(strokeHslAnimation.s, this.spawnStrokeColor.s, maxValues.s);
                this.spawnStrokeColor.l = this.#setColorAnimation(strokeHslAnimation.l, this.spawnStrokeColor.l, maxValues.l);
              }
              setParticlesOptionsStrokeColor(particlesOptions, this.spawnStrokeColor, this.spawnStrokeOpacity, this.spawnStrokeWidth);
            }
            let position = this.position;
            if (this.#shape) {
              const shapePosData = this.#shape.randomPosition();
              if (shapePosData) {
                position = shapePosData.position;
                const replaceData = shapeOptions.replace;
                if (replaceData.color && shapePosData.color) {
                  setParticlesOptionsFillColor(particlesOptions, shapePosData.color, replaceData.opacity ? shapePosData.opacity ?? defaultOpacity : defaultOpacity, true);
                }
              } else {
                position = null;
              }
            }
            if (position) {
              this.#container.particles.addParticle(position, particlesOptions);
            }
          }
        }
        #prepareToDie() {
          if (this.#paused) {
            return;
          }
          const duration = this.options.life.duration !== void 0 ? getRangeValue(this.options.life.duration) : void 0, minDuration = 0, minLifeCount2 = 0;
          if ((this.#lifeCount > minLifeCount2 || this.#immortal) && duration !== void 0 && duration > minDuration) {
            this.#duration = duration * millisecondsToSeconds;
          }
        }
        #setColorAnimation(animation, initValue, maxValue, factor = defaultColorAnimationFactor) {
          const container = this.#container;
          if (!animation.enable) {
            return initValue;
          }
          const colorOffset = randomInRangeValue(animation.offset), delay = getRangeValue(this.options.rate.delay), emitFactor = container.retina.reduceFactor ? delay * millisecondsToSeconds / container.retina.reduceFactor : Infinity, colorSpeed = getRangeValue(animation.speed);
          return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * factor) % maxValue;
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersInstancesManager.js
  var EmittersInstancesManager_exports = {};
  __export(EmittersInstancesManager_exports, {
    EmittersInstancesManager: () => EmittersInstancesManager
  });
  var defaultIndex, EmittersInstancesManager;
  var init_EmittersInstancesManager = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmittersInstancesManager.js"() {
      init_browser2();
      init_Emitter();
      defaultIndex = 0;
      EmittersInstancesManager = class {
        #containerArrays;
        #pluginManager;
        constructor(pluginManager) {
          this.#containerArrays = /* @__PURE__ */ new Map();
          this.#pluginManager = pluginManager;
        }
        async addEmitter(container, options, position) {
          return this.addEmitters(container, [{ options, position }]).then((t) => t[defaultIndex]);
        }
        async addEmitters(container, emitters) {
          const { EmitterInstance: EmitterInstance2 } = await Promise.resolve().then(() => (init_EmitterInstance(), EmitterInstance_exports)), res = [];
          for (const { options, position } of emitters) {
            const emitterOptions = new Emitter();
            emitterOptions.load(options);
            const emitter = new EmitterInstance2(this.#pluginManager, container, (emitter2) => {
              this.removeEmitter(container, emitter2);
            }, emitterOptions, position);
            await emitter.init();
            this.getArray(container).push(emitter);
            res.push(emitter);
          }
          return res;
        }
        clear(container) {
          this.initContainer(container);
          this.#containerArrays.set(container, []);
        }
        getArray(container) {
          this.initContainer(container);
          let array = this.#containerArrays.get(container);
          if (!array) {
            array = [];
            this.#containerArrays.set(container, array);
          }
          return array;
        }
        initContainer(container) {
          if (this.#containerArrays.has(container)) {
            return;
          }
          this.#containerArrays.set(container, []);
          container.getEmitter = (idxOrName) => {
            const array = this.getArray(container);
            return idxOrName === void 0 || isNumber(idxOrName) ? array[idxOrName ?? defaultIndex] : array.find((t) => t.name === idxOrName);
          };
          container.addEmitter = async (options, position) => this.addEmitter(container, options, position);
          container.addEmitters = async (emitters) => this.addEmitters(container, emitters);
          container.removeEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              this.removeEmitter(container, emitter);
            }
          };
          container.playEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              emitter.externalPlay();
            }
          };
          container.pauseEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              emitter.externalPause();
            }
          };
        }
        removeEmitter(container, emitter) {
          const index = this.getArray(container).indexOf(emitter), deleteCount2 = 1;
          if (index >= minIndex) {
            this.getArray(container).splice(index, deleteCount2);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/shape-image/browser/ImagePreloaderInstance.js
  var ImagePreloaderInstance_exports = {};
  __export(ImagePreloaderInstance_exports, {
    ImagePreloaderInstance: () => ImagePreloaderInstance
  });
  var ImagePreloaderInstance;
  var init_ImagePreloaderInstance = __esm({
    "node_modules/@tsparticles/shape-image/browser/ImagePreloaderInstance.js"() {
      ImagePreloaderInstance = class {
        #container;
        #engine;
        constructor(engine, container) {
          this.#engine = engine;
          this.#container = container;
        }
        destroy() {
          this.#engine.images?.delete(this.#container);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-motion/browser/MotionPluginInstance.js
  var MotionPluginInstance_exports = {};
  __export(MotionPluginInstance_exports, {
    MotionPluginInstance: () => MotionPluginInstance
  });
  var defaultFactor, defaultReduce, disableReduce, identity3, MotionPluginInstance;
  var init_MotionPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-motion/browser/MotionPluginInstance.js"() {
      init_browser2();
      defaultFactor = 1;
      defaultReduce = 1;
      disableReduce = 0;
      identity3 = 1;
      MotionPluginInstance = class {
        #container;
        constructor(container) {
          this.#container = container;
        }
        async init() {
          const container = this.#container, options = container.actualOptions.motion;
          if (!(options && (options.disable || options.reduce.value))) {
            container.retina.reduceFactor = 1;
            return;
          }
          const mediaQuery = safeMatchMedia("(prefers-reduced-motion: reduce)");
          if (!mediaQuery) {
            container.retina.reduceFactor = defaultFactor;
            return;
          }
          this.#handleMotionChange(mediaQuery);
          const handleChange = () => {
            void (async () => {
              this.#handleMotionChange(mediaQuery);
              try {
                await container.refresh();
              } catch {
              }
            })();
          };
          mediaQuery.addEventListener("change", handleChange);
          await Promise.resolve();
        }
        #handleMotionChange(mediaQuery) {
          const container = this.#container, motion = container.actualOptions.motion;
          if (!motion) {
            return;
          }
          if (mediaQuery.matches) {
            if (motion.disable) {
              container.retina.reduceFactor = disableReduce;
            } else {
              container.retina.reduceFactor = motion.reduce.value ? identity3 / motion.reduce.factor : defaultFactor;
            }
          } else {
            container.retina.reduceFactor = defaultReduce;
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/confetti/browser/confetti.js
  init_browser2();

  // node_modules/@tsparticles/plugin-blend/browser/Options/Classes/Blend.js
  init_browser2();
  var Blend = class {
    enable = false;
    mode = "destination-out";
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "mode", data.mode);
      loadProperty(this, "enable", data.enable);
    }
  };

  // node_modules/@tsparticles/plugin-blend/browser/BlendPlugin.js
  function hasEnabledBlend(particleOptions) {
    if (!particleOptions || typeof particleOptions !== "object" || !("blend" in particleOptions)) {
      return false;
    }
    const blend = particleOptions.blend;
    return !!blend && typeof blend === "object" && "enable" in blend && !!blend.enable;
  }
  var BlendPlugin = class {
    id = "blend";
    async getPlugin(container) {
      const { BlendPluginInstance: BlendPluginInstance2 } = await Promise.resolve().then(() => (init_BlendPluginInstance(), BlendPluginInstance_exports));
      return new BlendPluginInstance2(container);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      let blendOptions = options.blend;
      if (!blendOptions?.load) {
        options.blend = blendOptions = new Blend();
      }
      blendOptions.load(source?.blend);
    }
    loadParticlesOptions(_container, options, source) {
      options.blend ??= new Blend();
      options.blend.load(source?.blend);
    }
    needsPlugin(options) {
      if (options?.blend?.enable || options?.particles?.blend?.enable || Object.values(options?.particles?.groups ?? {}).some(hasEnabledBlend)) {
        return true;
      }
      const emitters = options?.["emitters"];
      let emitterList = [];
      if (Array.isArray(emitters)) {
        emitterList = emitters;
      } else if (emitters) {
        emitterList = [emitters];
      }
      return emitterList.some((emitter) => {
        if (!emitter || typeof emitter !== "object" || !("particles" in emitter)) {
          return false;
        }
        const particles = emitter.particles;
        return Array.isArray(particles) ? particles.some(hasEnabledBlend) : hasEnabledBlend(particles);
      });
    }
  };

  // node_modules/@tsparticles/plugin-blend/browser/index.js
  async function loadBlendPlugin(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addPlugin(new BlendPlugin());
    });
  }

  // node_modules/@tsparticles/plugin-blend/browser/browser.js
  var globalObject2 = globalThis;
  globalObject2.__tsParticlesInternals = globalObject2.__tsParticlesInternals ?? {};
  globalObject2.loadBlendPlugin = loadBlendPlugin;

  // node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-circle/browser/Utils.js
  init_browser2();
  var minAngle = 0;
  function drawCircle(data) {
    const { context, particle, radius } = data;
    particle.circleRange ??= { min: minAngle, max: doublePI };
    const circleRange = particle.circleRange;
    context.arc(originPoint.x, originPoint.y, radius, circleRange.min, circleRange.max, false);
  }

  // node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
  var sides = 12;
  var maxAngle = 360;
  var minAngle2 = 0;
  var CircleDrawer = class {
    draw(data) {
      drawCircle(data);
    }
    getSidesCount() {
      return sides;
    }
    particleInit(_container, particle) {
      const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
        max: maxAngle,
        min: minAngle2
      };
      particle.circleRange = isObject(angle) ? { min: degToRad(angle.min), max: degToRad(angle.max) } : {
        min: minAngle2,
        max: degToRad(angle)
      };
    }
  };

  // node_modules/@tsparticles/shape-circle/browser/index.js
  async function loadCircleShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["circle"], () => {
        return Promise.resolve(new CircleDrawer());
      });
    });
  }

  // node_modules/@tsparticles/shape-circle/browser/browser.js
  var globalObject3 = globalThis;
  globalObject3.__tsParticlesInternals = globalObject3.__tsParticlesInternals ?? {};
  globalObject3.loadCircleShape = loadCircleShape;

  // node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js
  init_browser2();
  var RgbIndexes;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 4] = "a";
  })(RgbIndexes || (RgbIndexes = {}));
  var shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
  var hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
  var hexRadix = 16;
  var alphaFactor = 255;
  var HexColorManager = class {
    accepts(input) {
      return input.startsWith("#");
    }
    handleColor(color) {
      return this.#parseString(color.value);
    }
    handleRangeColor(color) {
      return this.#parseString(color.value);
    }
    parseString(input) {
      return this.#parseString(input);
    }
    #parseString(hexColor) {
      if (typeof hexColor !== "string" || !this.accepts(hexColor)) {
        return;
      }
      const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a === void 0 ? "" : a + a);
      }), result = hexRegex.exec(hexFixed);
      return result ? {
        a: result[RgbIndexes.a] ? Number.parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha,
        b: Number.parseInt(result[RgbIndexes.b] ?? "0", hexRadix),
        g: Number.parseInt(result[RgbIndexes.g] ?? "0", hexRadix),
        r: Number.parseInt(result[RgbIndexes.r] ?? "0", hexRadix)
      } : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-hex-color/browser/index.js
  async function loadHexColorPlugin(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hex", new HexColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-hex-color/browser/browser.js
  var globalObject4 = globalThis;
  globalObject4.__tsParticlesInternals = globalObject4.__tsParticlesInternals ?? {};
  globalObject4.loadHexColorPlugin = loadHexColorPlugin;

  // node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js
  init_browser2();
  var HslIndexes;
  (function(HslIndexes2) {
    HslIndexes2[HslIndexes2["h"] = 1] = "h";
    HslIndexes2[HslIndexes2["s"] = 2] = "s";
    HslIndexes2[HslIndexes2["l"] = 3] = "l";
    HslIndexes2[HslIndexes2["a"] = 5] = "a";
  })(HslIndexes || (HslIndexes = {}));
  var hslRegex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
  var HslColorManager = class {
    accepts(input) {
      return input.startsWith("hsl");
    }
    handleColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
        return;
      }
      return hslToRgb(hslColor);
    }
    handleRangeColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
        return;
      }
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
    parseString(input) {
      if (!this.accepts(input)) {
        return;
      }
      const result = hslRegex.exec(input), minLength = 4, radix = 10;
      return result ? hslaToRgba({
        a: result.length > minLength ? parseAlpha(result[HslIndexes.a]) : defaultAlpha,
        h: Number.parseInt(result[HslIndexes.h] ?? "0", radix),
        l: Number.parseInt(result[HslIndexes.l] ?? "0", radix),
        s: Number.parseInt(result[HslIndexes.s] ?? "0", radix)
      }) : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-hsl-color/browser/index.js
  async function loadHslColorPlugin(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hsl", new HslColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-hsl-color/browser/browser.js
  var globalObject5 = globalThis;
  globalObject5.__tsParticlesInternals = globalObject5.__tsParticlesInternals ?? {};
  globalObject5.loadHslColorPlugin = loadHslColorPlugin;

  // node_modules/@tsparticles/plugin-move/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/plugin-move/browser/ErrorCodes.js
  var ErrorCodes2 = {
    baseMoverNotLoaded: "TSP-3203"
  };

  // node_modules/@tsparticles/plugin-move/browser/ErrorMessages.js
  var ErrorMessages = {
    [ErrorCodes2.baseMoverNotLoaded]: "tsParticles Base Mover is not loaded"
  };

  // node_modules/@tsparticles/plugin-move/browser/MovePlugin.js
  var MovePlugin = class {
    id = "move";
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    async getPlugin(container) {
      const { MovePluginInstance: MovePluginInstance2 } = await Promise.resolve().then(() => (init_MovePluginInstance(), MovePluginInstance_exports));
      return new MovePluginInstance2(this.#pluginManager, container);
    }
    loadOptions() {
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/plugin-move/browser/index.js
  async function loadMovePlugin(engine) {
    engine.checkVersion("4.5.4");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages);
    }
    await engine.pluginManager.register((e) => {
      const moveEngine = e, movePluginManager = moveEngine.pluginManager;
      movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
      movePluginManager.addPathGenerator = (name, generator) => {
        if (movePluginManager.initialized) {
          return;
        }
        movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
        movePluginManager.initializers.pathGenerators.set(name, generator);
      };
      e.pluginManager.addPlugin(new MovePlugin(e.pluginManager));
    });
  }

  // node_modules/@tsparticles/plugin-move/browser/browser.js
  var globalObject6 = globalThis;
  globalObject6.__tsParticlesInternals = globalObject6.__tsParticlesInternals ?? {};
  globalObject6.loadMovePlugin = loadMovePlugin;

  // node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
  init_browser2();

  // node_modules/@tsparticles/animation-utils/browser/Utils.js
  init_browser2();
  function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch (destroyType) {
      case DestroyType.max:
        if (value >= maxValue) {
          particle.destroy();
        }
        break;
      case DestroyType.min:
        if (value <= minValue) {
          particle.destroy();
        }
        break;
      default:
        break;
    }
  }
  function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
      delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
      enable: animationOptions.enable,
      value: getRangeValue(options.value) * pxRatio,
      max: getRangeMax(valueRange) * pxRatio,
      min: getRangeMin(valueRange) * pxRatio,
      loops: 0,
      maxLoops: getRangeValue(animationOptions.count),
      time: 0
    }, decayOffset3 = 1;
    if (animationOptions.enable) {
      res.decay = decayOffset3 - getRangeValue(animationOptions.decay);
      switch (animationOptions.mode) {
        case AnimationMode.increase:
          res.status = AnimationStatus.increasing;
          break;
        case AnimationMode.decrease:
          res.status = AnimationStatus.decreasing;
          break;
        case AnimationMode.random:
          res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
          break;
        default:
          break;
      }
      const autoStatus = animationOptions.mode === AnimationMode.auto;
      switch (animationOptions.startValue) {
        case StartValueType.min:
          res.value = res.min;
          if (autoStatus) {
            res.status = AnimationStatus.increasing;
          }
          break;
        case StartValueType.max:
          res.value = res.max;
          if (autoStatus) {
            res.status = AnimationStatus.decreasing;
          }
          break;
        case StartValueType.random:
        default:
          res.value = randomInRangeValue(res);
          if (autoStatus) {
            res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
          }
          break;
      }
    }
    res.initialValue = res.value;
    return res;
  }
  function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    const minLoops2 = 0, minDelay = 0, identity4 = 1, minVelocity2 = 0, minDecay = 1;
    if (particle.destroyed || !data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    const velocity = (data.velocity ?? minVelocity2) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
    data.time ??= 0;
    const delayTime = data.delayTime ?? minDelay;
    if (delayTime > minDelay && data.time < delayTime) {
      data.time += delta.value;
      if (data.time < delayTime) {
        return;
      }
    }
    switch (data.status) {
      case AnimationStatus.increasing:
        data.value += velocity;
        break;
      case AnimationStatus.decreasing:
        data.value -= velocity;
        break;
      default:
        break;
    }
    if (data.velocity && decay !== identity4) {
      data.velocity *= decay;
    }
    switch (data.status) {
      case AnimationStatus.increasing:
        if (data.value >= maxValue) {
          if (changeDirection) {
            data.status = AnimationStatus.decreasing;
          } else {
            data.value -= maxValue;
          }
          data.loops ??= minLoops2;
          data.loops++;
        }
        break;
      case AnimationStatus.decreasing:
        if (data.value <= minValue) {
          if (changeDirection) {
            data.status = AnimationStatus.increasing;
          } else {
            data.value += maxValue;
          }
          data.loops ??= minLoops2;
          data.loops++;
        }
        break;
      default:
        break;
    }
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) {
      data.value = clamp(data.value, minValue, maxValue);
    }
  }

  // node_modules/@tsparticles/animation-utils/browser/browser.js
  var globalObject7 = globalThis;
  globalObject7.__tsParticlesInternals = globalObject7.__tsParticlesInternals ?? {};

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/Opacity.js
  init_browser2();

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/OpacityAnimation.js
  init_browser2();
  var OpacityAnimation = class extends RangedAnimationOptions {
    destroy = DestroyType.none;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "destroy", data.destroy);
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/Opacity.js
  var Opacity = class extends RangedAnimationValueWithRandom {
    animation = new OpacityAnimation();
    value = 1;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
  var OpacityUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const opacityOptions = particle.options.opacity, pxRatio = 1;
      if (!opacityOptions) {
        return;
      }
      particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
      const opacityAnimation = opacityOptions.animation;
      if (opacityAnimation.enable) {
        particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.#container.retina.reduceFactor;
        if (!opacityAnimation.sync) {
          particle.opacity.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const none2 = 0;
      return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none2) <= none2 || (particle.opacity.maxLoops ?? none2) > none2 && (particle.opacity.loops ?? none2) < (particle.opacity.maxLoops ?? none2));
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "opacity", Opacity, ...sources);
    }
    reset(particle) {
      if (!particle.opacity) {
        return;
      }
      particle.opacity.time = 0;
      particle.opacity.loops = 0;
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.opacity || !particle.options.opacity) {
        return;
      }
      updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/index.js
  async function loadOpacityUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("opacity", (container) => {
        return Promise.resolve(new OpacityUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-opacity/browser/browser.js
  var globalObject8 = globalThis;
  globalObject8.__tsParticlesInternals = globalObject8.__tsParticlesInternals ?? {};
  globalObject8.loadOpacityUpdater = loadOpacityUpdater;

  // node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
  init_browser2();

  // node_modules/@tsparticles/updater-out-modes/browser/Utils.js
  init_browser2();
  var boundsMin = 0;
  var bounceAxisConfigs = {
    [OutModeDirection.left]: {
      axis: "x",
      canvas: "width",
      bounce: "horizontal",
      negativeEdge: "right",
      positiveEdge: "left",
      negative: true
    },
    [OutModeDirection.right]: {
      axis: "x",
      canvas: "width",
      bounce: "horizontal",
      negativeEdge: "right",
      positiveEdge: "left",
      negative: false
    },
    [OutModeDirection.top]: {
      axis: "y",
      canvas: "height",
      bounce: "vertical",
      negativeEdge: "bottom",
      positiveEdge: "top",
      negative: true
    },
    [OutModeDirection.bottom]: {
      axis: "y",
      canvas: "height",
      bounce: "vertical",
      negativeEdge: "bottom",
      positiveEdge: "top",
      negative: false
    }
  };
  function bounce(data) {
    if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || !(data.direction in bounceAxisConfigs)) {
      return;
    }
    const config = bounceAxisConfigs[data.direction], bounds = data.bounds, canvasDim = data.canvasSize[config.canvas], position = data.particle.position, velocity = data.particle.velocity[config.axis];
    if (config.negative && bounds[config.negativeEdge] < boundsMin) {
      position[config.axis] = data.size + data.offset[config.axis];
    } else if (!config.negative && bounds[config.positiveEdge] > canvasDim) {
      position[config.axis] = canvasDim - data.size - data.offset[config.axis];
    }
    if (data.outOfCanvas && (config.negative && velocity < minVelocity || !config.negative && velocity > minVelocity)) {
      data.particle.velocity[config.axis] *= -getRangeValue(data.particle.options.bounce[config.bounce].value);
    } else {
      return;
    }
    const minPos = data.offset[config.axis] + data.size;
    position[config.axis] = config.negative ? minPos : canvasDim - minPos;
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }

  // node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
  var BounceOutMode = class {
    modes;
    #container;
    #particleBouncePlugins;
    constructor(container) {
      this.#container = container;
      this.modes = [
        OutMode.bounce,
        OutMode.split
      ];
      this.#particleBouncePlugins = container.plugins.filter((p) => !!p.particleBounce);
    }
    update(particle, direction, delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      for (const plugin of this.#particleBouncePlugins) {
        if (plugin.particleBounce?.(particle, delta, direction)) {
          return;
        }
      }
      const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = this.#container.canvas.size, outOfCanvas = !particle.isInsideCanvasForOutMode(outMode, direction);
      bounce({ particle, outMode, direction, bounds, canvasSize, offset, outOfCanvas, size });
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js
  init_browser2();
  var DestroyOutMode = class {
    modes;
    constructor(_container) {
      this.modes = [OutMode.destroy];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      switch (particle.outType) {
        case ParticleOutType.normal:
        case ParticleOutType.outside:
          if (particle.isInsideCanvasForOutMode(outMode, direction)) {
            return;
          }
          break;
        case ParticleOutType.inside: {
          const { dx, dy } = getDistances(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
          if (vx < minVelocity && dx > particle.moveCenter.radius || vy < minVelocity && dy > particle.moveCenter.radius || vx >= minVelocity && dx < -particle.moveCenter.radius || vy >= minVelocity && dy < -particle.moveCenter.radius) {
            return;
          }
          break;
        }
      }
      particle.destroy(true);
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js
  init_browser2();
  var NoneOutMode = class {
    modes;
    #container;
    constructor(container) {
      this.#container = container;
      this.modes = [OutMode.none];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
        return;
      }
      const gravityOptions = particle.options.move.gravity, container = this.#container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
      if (!gravityOptions.enable) {
        if (particle.velocity.y > minVelocity && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity && particle.position.y >= -pRadius || particle.velocity.x > minVelocity && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity && particle.position.x >= -pRadius) {
          return;
        }
        if (!isPointInside(particle.position, container.canvas.size, originPoint, pRadius, direction)) {
          particle.destroy();
        }
      } else {
        const position = particle.position;
        if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
          particle.destroy();
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js
  init_browser2();
  var updateVector = Vector.origin;
  var OutOutMode = class {
    modes;
    #container;
    constructor(container) {
      this.#container = container;
      this.modes = [OutMode.out];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      const container = this.#container;
      if (particle.outType === ParticleOutType.inside) {
        this.#applyOutModeInside(particle, container);
      } else {
        if (particle.isInsideCanvasForOutMode(outMode, direction)) {
          return;
        }
        if (particle.outType === ParticleOutType.outside) {
          this.#applyParticleModeOutside(particle);
        } else {
          this.#applyOutModeNormal(particle, container, direction);
        }
      }
    }
    #applyOutModeInside(particle, container) {
      const { x: vx, y: vy } = particle.velocity;
      updateVector.setTo(originPoint);
      updateVector.length = particle.moveCenter.radius;
      updateVector.angle = particle.velocity.angle + Math.PI;
      updateVector.addTo(particle.moveCenter);
      const { dx, dy } = getDistances(particle.position, updateVector);
      if (vx <= minVelocity && dx >= minDistance || vy <= minVelocity && dy >= minDistance || vx >= minVelocity && dx <= minDistance || vy >= minVelocity && dy <= minDistance) {
        return;
      }
      particle.position.x = Math.floor(randomInRangeValue({
        min: 0,
        max: container.canvas.size.width
      }));
      particle.position.y = Math.floor(randomInRangeValue({
        min: 0,
        max: container.canvas.size.height
      }));
      const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
      particle.direction = Math.atan2(-newDy, -newDx);
      particle.velocity.angle = particle.direction;
      particle.justWarped = true;
    }
    #applyOutModeNormal(particle, container, direction) {
      const warp = particle.options.move.warp, canvasSize = container.canvas.size, sizeValue = particle.getRadius(), newPos = {
        bottom: canvasSize.height + sizeValue + particle.offset.y,
        left: -sizeValue - particle.offset.x,
        right: canvasSize.width + sizeValue + particle.offset.x,
        top: -sizeValue - particle.offset.y
      }, nextBounds = calculateBounds(particle.position, sizeValue);
      if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
        particle.position.x = newPos.left;
        particle.initialPosition.x = particle.position.x;
        if (!warp) {
          particle.position.y = getRandom() * canvasSize.height;
          particle.initialPosition.y = particle.position.y;
        }
        particle.justWarped = true;
      } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
        particle.position.x = newPos.right;
        particle.initialPosition.x = particle.position.x;
        if (!warp) {
          particle.position.y = getRandom() * canvasSize.height;
          particle.initialPosition.y = particle.position.y;
        }
        particle.justWarped = true;
      }
      if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
        if (!warp) {
          particle.position.x = getRandom() * canvasSize.width;
          particle.initialPosition.x = particle.position.x;
        }
        particle.position.y = newPos.top;
        particle.initialPosition.y = particle.position.y;
        particle.justWarped = true;
      } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
        if (!warp) {
          particle.position.x = getRandom() * canvasSize.width;
          particle.initialPosition.x = particle.position.x;
        }
        particle.position.y = newPos.bottom;
        particle.initialPosition.y = particle.position.y;
        particle.justWarped = true;
      }
    }
    #applyParticleModeOutside(particle) {
      particle.position.x = Math.floor(randomInRangeValue({
        min: -particle.moveCenter.radius,
        max: particle.moveCenter.radius
      })) + particle.moveCenter.x;
      particle.position.y = Math.floor(randomInRangeValue({
        min: -particle.moveCenter.radius,
        max: particle.moveCenter.radius
      })) + particle.moveCenter.y;
      const { dx, dy } = getDistances(particle.position, particle.moveCenter);
      if (particle.moveCenter.radius) {
        particle.direction = Math.atan2(dy, dx);
        particle.velocity.angle = particle.direction;
      }
      particle.justWarped = true;
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
  var checkOutMode = (outModes, outMode) => {
    return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
  };
  var OutOfCanvasUpdater = class {
    updaters;
    #container;
    constructor(container) {
      this.#container = container;
      this.updaters = /* @__PURE__ */ new Map();
    }
    init(particle) {
      this.#addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
      const outModes = particle.options.move.outModes;
      particle.justWarped = false;
      this.#updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
      this.#updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
      this.#updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
      this.#updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
    }
    #addUpdaterIfMissing(particle, outMode, getUpdater) {
      const outModes = particle.options.move.outModes;
      if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
        this.updaters.set(outMode, getUpdater(this.#container));
      }
    }
    #updateOutMode(particle, delta, outMode, direction) {
      for (const updater of this.updaters.values()) {
        updater.update(particle, direction, delta, outMode);
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/index.js
  async function loadOutModesUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("outModes", (container) => {
        return Promise.resolve(new OutOfCanvasUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-out-modes/browser/browser.js
  var globalObject9 = globalThis;
  globalObject9.__tsParticlesInternals = globalObject9.__tsParticlesInternals ?? {};
  globalObject9.loadOutModesUpdater = loadOutModesUpdater;

  // node_modules/@tsparticles/updater-paint/browser/PaintUpdater.js
  init_browser2();
  var defaultOpacity2 = 1;
  var PaintUpdater = class {
    #container;
    #pluginManager;
    constructor(pluginManager, container) {
      this.#container = container;
      this.#pluginManager = pluginManager;
    }
    init(particle) {
      const container = this.#container, options = particle.options, paint = itemFromSingleOrMultiple(options.paint, particle.id, options.reduceDuplicates);
      this.#initFill(paint, particle, container);
      this.#initStroke(paint, particle, container);
    }
    isEnabled(particle) {
      const { fillAnimation, fillColor, strokeAnimation, strokeColor } = particle, fillEnabled = !!fillAnimation && (fillColor?.h.value !== void 0 && fillColor.h.enable || fillColor?.s.value !== void 0 && fillColor.s.enable || fillColor?.l.value !== void 0 && fillColor.l.enable), strokeEnabled = !!strokeAnimation && (strokeColor?.h.value !== void 0 && strokeColor.h.enable || strokeColor?.s.value !== void 0 && strokeColor.s.enable || strokeColor?.l.value !== void 0 && strokeColor.l.enable);
      return !particle.destroyed && !particle.spawning && (fillEnabled || strokeEnabled);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateColor(particle.fillColor, delta, this.#container.hdr);
      updateColor(particle.strokeColor, delta, this.#container.hdr);
    }
    #initFill(paint, particle, container) {
      const fill = paint?.fill, color = paint?.color, paintColor = color ?? void 0;
      if (!fill) {
        particle.fillEnabled = false;
        particle.fillAnimation = void 0;
        particle.fillColor = void 0;
        particle.fillOpacity = defaultOpacity2;
        return;
      }
      const fillColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), fill.color);
      particle.fillEnabled = fill.enable;
      particle.fillOpacity = getRangeValue(fill.opacity);
      particle.fillAnimation = fillColor.animation;
      const fillHslColor = rangeColorToHsl(this.#pluginManager, fillColor);
      if (!fillHslColor) {
        return;
      }
      particle.fillColor = getHslAnimationFromHsl(fillHslColor, particle.fillAnimation, container.retina.reduceFactor);
    }
    #initStroke(paint, particle, container) {
      const stroke = paint?.stroke, color = paint?.color, paintColor = color ?? void 0;
      if (!stroke) {
        particle.strokeAnimation = void 0;
        particle.strokeColor = void 0;
        particle.strokeOpacity = defaultOpacity2;
        particle.strokeWidth = 0;
        return;
      }
      const strokeColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), stroke.color);
      particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
      particle.strokeOpacity = getRangeValue(stroke.opacity ?? defaultOpacity2);
      particle.strokeAnimation = strokeColor.animation;
      const strokeHslColor = rangeColorToHsl(this.#pluginManager, strokeColor) ?? particle.getFillColor();
      if (!strokeHslColor) {
        return;
      }
      particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
    }
  };

  // node_modules/@tsparticles/updater-paint/browser/index.js
  async function loadPaintUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("paint", (container) => {
        return Promise.resolve(new PaintUpdater(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/updater-paint/browser/browser.js
  var globalObject10 = globalThis;
  globalObject10.__tsParticlesInternals = globalObject10.__tsParticlesInternals ?? {};
  globalObject10.loadPaintUpdater = loadPaintUpdater;

  // node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js
  init_browser2();
  var RgbIndexes2;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 5] = "a";
  })(RgbIndexes2 || (RgbIndexes2 = {}));
  var rgbRegex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
  var RgbColorManager = class {
    accepts(input) {
      return input.startsWith("rgb");
    }
    handleColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
        return;
      }
      return rgbColor;
    }
    handleRangeColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
        return;
      }
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
    parseString(input) {
      if (!this.accepts(input)) {
        return;
      }
      const result = rgbRegex.exec(input), radix = 10, minLength = 4;
      return result ? {
        a: result.length > minLength ? parseAlpha(result[RgbIndexes2.a]) : defaultAlpha,
        b: parseInt(result[RgbIndexes2.b] ?? "0", radix),
        g: parseInt(result[RgbIndexes2.g] ?? "0", radix),
        r: parseInt(result[RgbIndexes2.r] ?? "0", radix)
      } : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-rgb-color/browser/index.js
  async function loadRgbColorPlugin(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("rgb", new RgbColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-rgb-color/browser/browser.js
  var globalObject11 = globalThis;
  globalObject11.__tsParticlesInternals = globalObject11.__tsParticlesInternals ?? {};
  globalObject11.loadRgbColorPlugin = loadRgbColorPlugin;

  // node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/Size.js
  init_browser2();

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/SizeAnimation.js
  init_browser2();
  var SizeAnimation = class extends RangedAnimationOptions {
    destroy = DestroyType.none;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "destroy", data.destroy);
    }
  };

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/Size.js
  var Size = class extends RangedAnimationValueWithRandom {
    animation = new SizeAnimation();
    value = 3;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
  var minLoops = 0;
  var SizeUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const container = this.#container, sizeOptions = particle.options.size;
      if (!sizeOptions) {
        return;
      }
      const sizeAnimation = sizeOptions.animation;
      if (!sizeAnimation.enable) {
        return;
      }
      particle.size.velocity = particle.retina.sizeAnimationSpeed / percentDenominator * container.retina.reduceFactor;
      if (sizeAnimation.sync) {
        return;
      }
      particle.size.velocity *= getRandom();
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "size", Size, ...sources);
    }
    preInit(particle) {
      const pxRatio = this.#container.retina.pixelRatio, options = particle.options, sizeOptions = options.size;
      if (!sizeOptions) {
        return;
      }
      particle.size = initParticleNumericAnimationValue(sizeOptions, pxRatio);
      particle.retina.sizeAnimationSpeed = getRangeValue(sizeOptions.animation.speed) * pxRatio;
    }
    reset(particle) {
      particle.size.time = 0;
      particle.size.loops = 0;
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.options.size) {
        return;
      }
      updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-size/browser/index.js
  async function loadSizeUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("size", (container) => {
        return Promise.resolve(new SizeUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-size/browser/browser.js
  var globalObject12 = globalThis;
  globalObject12.__tsParticlesInternals = globalObject12.__tsParticlesInternals ?? {};
  globalObject12.loadSizeUpdater = loadSizeUpdater;

  // node_modules/@tsparticles/basic/browser/index.js
  async function loadBasic(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register(async (e) => {
      await Promise.all([
        loadBlendPlugin(e),
        loadHexColorPlugin(e),
        loadHslColorPlugin(e),
        loadRgbColorPlugin(e),
        loadMovePlugin(e),
        loadCircleShape(e),
        loadPaintUpdater(e),
        loadOpacityUpdater(e),
        loadOutModesUpdater(e),
        loadSizeUpdater(e)
      ]);
    });
  }

  // node_modules/@tsparticles/basic/browser/browser.js
  var globalObject13 = globalThis;
  globalObject13.__tsParticlesInternals = globalObject13.__tsParticlesInternals ?? {};
  globalObject13.loadBasic = loadBasic;

  // node_modules/@tsparticles/path-utils/browser/SegmentType.js
  var SegmentType;
  (function(SegmentType2) {
    SegmentType2["move"] = "move";
    SegmentType2["line"] = "line";
    SegmentType2["bezier"] = "bezier";
    SegmentType2["quadratic"] = "quadratic";
    SegmentType2["arc"] = "arc";
    SegmentType2["ellipse"] = "ellipse";
  })(SegmentType || (SegmentType = {}));

  // node_modules/@tsparticles/path-utils/browser/Utils.js
  init_browser2();
  var firstIndex = 0;
  var index2 = 1;
  var index3 = 2;
  var index4 = 3;
  function drawPath(ctx, radius, path) {
    const firstSegment = path.segments[firstIndex];
    if (!firstSegment) {
      return;
    }
    const firstValue = firstSegment.values[firstIndex];
    if (!firstValue) {
      return;
    }
    ctx.moveTo(firstValue.x * radius, firstValue.y * radius);
    for (const segment of path.segments) {
      const value = segment.values[firstIndex];
      if (!value) {
        continue;
      }
      const segmentValue2 = segment.values[index2], segmentValue3 = segment.values[index3], segmentValue4 = segment.values[index4];
      switch (segment.type) {
        case SegmentType.move:
          ctx.moveTo(value.x * radius, value.y * radius);
          break;
        case SegmentType.line:
          ctx.lineTo(value.x * radius, value.y * radius);
          break;
        case SegmentType.bezier:
          if (!segmentValue2 || !segmentValue3 || !segmentValue4) {
            continue;
          }
          ctx.bezierCurveTo(segmentValue2.x * radius, segmentValue2.y * radius, segmentValue3.x * radius, segmentValue3.y * radius, segmentValue4.x * radius, segmentValue4.y * radius);
          break;
        case SegmentType.quadratic:
          if (!segmentValue2 || !segmentValue3) {
            continue;
          }
          ctx.quadraticCurveTo(segmentValue2.x * radius, segmentValue2.y * radius, segmentValue3.x * radius, segmentValue3.y * radius);
          break;
        case SegmentType.arc:
          if (!segmentValue2 || !segmentValue3) {
            continue;
          }
          ctx.arc(value.x * radius, value.y * radius, segmentValue2.x * radius, segmentValue3.x, segmentValue3.y);
          break;
        case SegmentType.ellipse:
          if (!segmentValue2 || !segmentValue3 || !segmentValue4) {
            continue;
          }
          ctx.ellipse(value.x * radius, value.y * radius, segmentValue2.x * radius, segmentValue2.y * radius, segmentValue3.x, segmentValue4.x, segmentValue4.y);
          break;
      }
    }
    if (!path.half) {
      return;
    }
    const minLength = 0;
    for (let i = path.segments.length - lengthOffset; i >= minLength; i--) {
      const segment = path.segments[i];
      if (!segment) {
        continue;
      }
      const value = segment.values[firstIndex], index22 = 1, index32 = 2, segmentValue2 = segment.values[index22], segmentValue3 = segment.values[index32];
      switch (segment.type) {
        case SegmentType.line:
          if (!value) {
            break;
          }
          ctx.lineTo(value.x * -radius, value.y * radius);
          break;
        case SegmentType.bezier:
          if (!value || !segmentValue2 || !segmentValue3) {
            break;
          }
          ctx.bezierCurveTo(-segmentValue3.x * radius, segmentValue3.y * radius, -segmentValue2.x * radius, segmentValue2.y * radius, -value.x * radius, value.y * radius);
          break;
        case SegmentType.quadratic:
          if (!segmentValue2 || !segmentValue3) {
            break;
          }
          ctx.quadraticCurveTo(-segmentValue2.x * radius, segmentValue2.y * radius, -segmentValue3.x * radius, segmentValue3.y * radius);
          break;
        case SegmentType.arc:
        case SegmentType.ellipse:
        default:
          break;
      }
    }
  }

  // node_modules/@tsparticles/path-utils/browser/browser.js
  var globalObject14 = globalThis;
  globalObject14.__tsParticlesInternals = globalObject14.__tsParticlesInternals ?? {};

  // node_modules/@tsparticles/shape-cards/browser/paths.js
  init_browser2();

  // node_modules/@tsparticles/shape-cards/browser/SuitType.js
  var SuitType;
  (function(SuitType2) {
    SuitType2["hearts"] = "hearts";
    SuitType2["diamonds"] = "diamonds";
    SuitType2["clubs"] = "clubs";
    SuitType2["spades"] = "spades";
  })(SuitType || (SuitType = {}));

  // node_modules/@tsparticles/shape-cards/browser/paths.js
  var eighth = quarter * half;
  var n = half;
  var halfN = n * half;
  var oppositeN = -n;
  var oppositeHalfN = -halfN;
  var eighthN = n * eighth;
  var threeQuarterN = n * threeQuarter;
  var club = {
    half: true,
    segments: [
      {
        type: SegmentType.bezier,
        values: [
          { x: empty, y: oppositeN },
          { x: empty, y: oppositeN },
          { x: halfN, y: oppositeN },
          { x: halfN, y: oppositeHalfN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: oppositeHalfN },
          { x: halfN, y: oppositeHalfN },
          { x: n, y: oppositeHalfN },
          { x: n, y: empty }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: n, y: empty },
          { x: n, y: empty },
          { x: n, y: halfN },
          { x: halfN, y: halfN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: halfN },
          { x: halfN, y: halfN },
          { x: eighthN, y: halfN },
          { x: eighthN, y: eighthN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: eighthN, y: eighthN },
          { x: eighthN, y: halfN },
          { x: halfN, y: n },
          { x: halfN, y: n }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: n },
          { x: halfN, y: n },
          { x: empty, y: n },
          { x: empty, y: n }
        ]
      }
    ]
  };
  var diamond = {
    half: true,
    segments: [
      {
        type: SegmentType.bezier,
        values: [
          { x: empty, y: n },
          { x: empty, y: n },
          { x: threeQuarterN, y: empty },
          { x: threeQuarterN, y: empty }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: threeQuarterN, y: empty },
          { x: threeQuarterN, y: empty },
          { x: empty, y: oppositeN },
          { x: empty, y: oppositeN }
        ]
      }
    ]
  };
  var heart = {
    half: true,
    segments: [
      {
        type: SegmentType.bezier,
        values: [
          { x: empty, y: n },
          { x: empty, y: n },
          { x: n, y: empty },
          { x: n, y: oppositeHalfN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: n, y: oppositeHalfN },
          { x: n, y: oppositeHalfN },
          { x: n, y: oppositeN },
          { x: halfN, y: oppositeN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: oppositeN },
          { x: halfN, y: oppositeN },
          { x: empty, y: oppositeN },
          { x: empty, y: oppositeHalfN }
        ]
      }
    ]
  };
  var spade = {
    half: true,
    segments: [
      {
        type: SegmentType.bezier,
        values: [
          { x: empty, y: oppositeN },
          { x: empty, y: oppositeN },
          { x: n, y: oppositeHalfN },
          { x: n, y: empty }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: n, y: empty },
          { x: n, y: empty },
          { x: n, y: halfN },
          { x: halfN, y: halfN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: halfN },
          { x: halfN, y: halfN },
          { x: eighthN, y: halfN },
          { x: eighthN, y: eighthN }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: eighthN, y: eighthN },
          { x: eighthN, y: halfN },
          { x: halfN, y: n },
          { x: halfN, y: n }
        ]
      },
      {
        type: SegmentType.bezier,
        values: [
          { x: halfN, y: n },
          { x: halfN, y: n },
          { x: empty, y: n },
          { x: empty, y: n }
        ]
      }
    ]
  };
  var paths = {
    [SuitType.hearts]: heart,
    [SuitType.diamonds]: diamond,
    [SuitType.clubs]: club,
    [SuitType.spades]: spade
  };

  // node_modules/@tsparticles/shape-cards/browser/clubs/ClubDrawer.js
  var ClubDrawer = class {
    draw(data) {
      const { context, radius } = data;
      drawPath(context, radius, paths.clubs);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/clubs/index.js
  async function loadClubsSuitShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["club", "clubs"], () => Promise.resolve(new ClubDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-cards/browser/diamonds/DiamondDrawer.js
  var DiamondDrawer = class {
    draw(data) {
      const { context, radius } = data;
      drawPath(context, radius, paths.diamonds);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/diamonds/index.js
  async function loadDiamondsSuitShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["diamond", "diamonds"], () => Promise.resolve(new DiamondDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-cards/browser/hearts/HeartDrawer.js
  var HeartDrawer = class {
    draw(data) {
      const { context, radius } = data;
      drawPath(context, radius, paths.hearts);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/hearts/index.js
  async function loadHeartsSuitShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["heart", "hearts"], () => Promise.resolve(new HeartDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-cards/browser/spades/SpadeDrawer.js
  var SpadeDrawer = class {
    draw(data) {
      const { context, radius } = data;
      drawPath(context, radius, paths.spades);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/spades/index.js
  async function loadSpadesSuitShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["spade", "spades"], () => Promise.resolve(new SpadeDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-cards/browser/suits.js
  async function loadCardSuitsShape(engine) {
    engine.checkVersion("4.5.4");
    await Promise.all([
      loadClubsSuitShape(engine),
      loadDiamondsSuitShape(engine),
      loadHeartsSuitShape(engine),
      loadSpadesSuitShape(engine)
    ]);
  }

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersPlugin.js
  init_browser2();
  init_Emitter();
  var EmittersPlugin = class {
    id = "emitters";
    #instancesManager;
    constructor(instancesManager) {
      this.#instancesManager = instancesManager;
    }
    async getPlugin(container) {
      const { EmittersPluginInstance: EmittersPluginInstance2 } = await Promise.resolve().then(() => (init_EmittersPluginInstance(), EmittersPluginInstance_exports));
      return new EmittersPluginInstance2(this.#instancesManager, container);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      if (source?.emitters) {
        options.emitters = executeOnSingleOrMultiple(source.emitters, (emitter) => {
          const tmp = new Emitter();
          tmp.load(emitter);
          return tmp;
        });
      }
    }
    needsPlugin(options) {
      if (!options) {
        return false;
      }
      const emitters = options.emitters;
      return isArray(emitters) && !!emitters.length || emitters !== void 0;
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/ErrorCodes.js
  var ErrorCodes3 = {
    emittersPluginNotLoaded: "TSP-3101"
  };

  // node_modules/@tsparticles/plugin-emitters/browser/ErrorMessages.js
  var ErrorMessages2 = {
    [ErrorCodes3.emittersPluginNotLoaded]: "tsParticles Emitters Plugin is not loaded"
  };

  // node_modules/@tsparticles/plugin-emitters/browser/addEmittersShapesManager.js
  async function addEmittersShapesManager(e) {
    const { ShapeManager: ShapeManager2 } = await Promise.resolve().then(() => (init_ShapeManager(), ShapeManager_exports)), pluginManager = e.pluginManager;
    pluginManager.emitterShapeManager ??= new ShapeManager2();
    pluginManager.addEmitterShapeGenerator ??= (name, generator) => {
      pluginManager.emitterShapeManager?.addShapeGenerator(name, generator);
    };
  }

  // node_modules/@tsparticles/plugin-emitters/browser/plugin.js
  init_browser2();

  // node_modules/@tsparticles/plugin-emitters/browser/getEmittersInstancesManager.js
  var instancesManagers = /* @__PURE__ */ new WeakMap();
  function getEmittersInstancesManager(e) {
    const pluginManager = e.pluginManager;
    let manager = instancesManagers.get(pluginManager);
    if (!manager) {
      manager = Promise.resolve().then(() => (init_EmittersInstancesManager(), EmittersInstancesManager_exports)).then(({ EmittersInstancesManager: EmittersInstancesManager2 }) => new EmittersInstancesManager2(pluginManager)).catch((error) => {
        instancesManagers.delete(pluginManager);
        throw error;
      });
      instancesManagers.set(pluginManager, manager);
    }
    return manager;
  }

  // node_modules/@tsparticles/plugin-emitters/browser/Enums/EmitterClickMode.js
  var EmitterClickMode;
  (function(EmitterClickMode2) {
    EmitterClickMode2["emitter"] = "emitter";
  })(EmitterClickMode || (EmitterClickMode = {}));

  // node_modules/@tsparticles/plugin-emitters/browser/plugin.js
  async function loadEmittersPluginSimple(engine) {
    engine.checkVersion("4.5.4");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages2);
    }
    await engine.pluginManager.register(async (e) => {
      const instancesManager = await getEmittersInstancesManager(e);
      await addEmittersShapesManager(e);
      e.pluginManager.addPlugin(new EmittersPlugin(instancesManager));
    });
  }

  // node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-emoji/browser/Utils.js
  init_browser2();
  var validTypes = ["emoji"];
  function drawEmoji(data, image) {
    const { context, opacity } = data, previousAlpha = context.globalAlpha, diameter = image.width, radius = diameter * half;
    context.globalAlpha = opacity;
    context.drawImage(image, -radius, -radius, diameter, diameter);
    context.globalAlpha = previousAlpha;
  }

  // node_modules/@tsparticles/canvas-utils/browser/Utils.js
  init_browser2();
  var alphaMax = 255;
  var alphaFactor2 = identity / alphaMax;
  async function loadFont(font, weight) {
    try {
      await safeDocument().fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch {
    }
  }

  // node_modules/@tsparticles/canvas-utils/browser/browser.js
  var globalObject15 = globalThis;
  globalObject15.__tsParticlesInternals = globalObject15.__tsParticlesInternals ?? {};

  // node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
  var defaultFont = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
  var noPadding = 0;
  var firstItem = 0;
  var EmojiDrawer = class {
    #emojiShapeDict = /* @__PURE__ */ new Map();
    destroy() {
      for (const [key, data] of this.#emojiShapeDict) {
        if (data instanceof ImageBitmap) {
          data.close();
        }
        this.#emojiShapeDict.delete(key);
      }
    }
    draw(data) {
      const key = data.particle.emojiDataKey;
      if (!key) {
        return;
      }
      const image = this.#emojiShapeDict.get(key);
      if (!image) {
        return;
      }
      drawEmoji(data, image);
    }
    async init(container) {
      const options = container.actualOptions, shapeData = options.particles.shape;
      if (!validTypes.some((t) => isInArray(t, shapeData.type))) {
        return;
      }
      const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => shapeData.options[t])[firstItem];
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        if (shape.font) {
          promises.push(loadFont(shape.font));
        }
      });
      await Promise.all(promises);
    }
    particleDestroy(particle) {
      particle.emojiDataKey = void 0;
    }
    particleInit(container, particle) {
      const shapeData = particle.shapeData;
      if (!shapeData.value) {
        return;
      }
      const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData);
      if (!emoji) {
        return;
      }
      const emojiOptions = typeof emoji === "string" ? {
        font: shapeData.font ?? defaultFont,
        padding: shapeData.padding ?? noPadding,
        value: emoji
      } : {
        font: defaultFont,
        padding: noPadding,
        ...shapeData,
        ...emoji
      }, font = emojiOptions.font, value = emojiOptions.value, cacheKey = `${value}_${font}`;
      if (this.#emojiShapeDict.has(cacheKey)) {
        particle.emojiDataKey = cacheKey;
        return;
      }
      const padding = emojiOptions.padding * double, maxSize = getRangeMax(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double, cacheCanvas = new OffscreenCanvas(canvasSize, canvasSize), context = cacheCanvas.getContext("2d", container.canvas.render.settings);
      if (!context) {
        return;
      }
      context.font = `400 ${(maxSize * double).toString()}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(value, fullSize, fullSize);
      const image = cacheCanvas instanceof HTMLCanvasElement ? cacheCanvas : cacheCanvas.transferToImageBitmap();
      this.#emojiShapeDict.set(cacheKey, image);
      particle.emojiDataKey = cacheKey;
    }
  };

  // node_modules/@tsparticles/shape-emoji/browser/index.js
  async function loadEmojiShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(validTypes, () => Promise.resolve(new EmojiDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-emoji/browser/browser.js
  var globalObject16 = globalThis;
  globalObject16.__tsParticlesInternals = globalObject16.__tsParticlesInternals ?? {};
  globalObject16.loadEmojiShape = loadEmojiShape;

  // node_modules/@tsparticles/shape-heart/browser/Utils.js
  init_browser2();
  function drawHeart(data) {
    const { context, radius } = data, diameter = radius * double, halfRadius = radius * half, radiusAndHalf = radius + halfRadius, x = -radius, y = -radius;
    context.moveTo(x, y + halfRadius);
    context.quadraticCurveTo(x, y, x + halfRadius, y);
    context.quadraticCurveTo(x + radius, y, x + radius, y + halfRadius);
    context.quadraticCurveTo(x + radius, y, x + radiusAndHalf, y);
    context.quadraticCurveTo(x + diameter, y, x + diameter, y + halfRadius);
    context.quadraticCurveTo(x + diameter, y + radius, x + radiusAndHalf, y + radiusAndHalf);
    context.lineTo(x + radius, y + diameter);
    context.lineTo(x + halfRadius, y + radiusAndHalf);
    context.quadraticCurveTo(x, y + radius, x, y + halfRadius);
  }

  // node_modules/@tsparticles/shape-heart/browser/HeartDrawer.js
  var HeartDrawer2 = class {
    draw(data) {
      drawHeart(data);
    }
  };

  // node_modules/@tsparticles/shape-heart/browser/index.js
  async function loadHeartShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["heart"], () => Promise.resolve(new HeartDrawer2()));
    });
  }

  // node_modules/@tsparticles/shape-heart/browser/browser.js
  var globalObject17 = globalThis;
  globalObject17.__tsParticlesInternals = globalObject17.__tsParticlesInternals ?? {};
  globalObject17.loadHeartShape = loadHeartShape;

  // node_modules/@tsparticles/shape-image/browser/Utils.js
  init_browser2();
  var shapeTypes = ["image", "images"];
  var stringStart = 0;
  var defaultOpacity3 = 1;
  var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
  function replaceColorSvg(imageShape, color, opacity, hdr = false, peakNits, mode) {
    const { svgData } = imageShape;
    if (!svgData) {
      return "";
    }
    const colorStyle = getStyleFromHsl(color, hdr, opacity, peakNits, mode);
    if (svgData.includes("fill")) {
      return svgData.replaceAll(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
  }
  async function loadImage(image) {
    return new Promise((resolve) => {
      image.loading = true;
      const img = new Image();
      image.element = img;
      img.addEventListener("load", () => {
        image.loading = false;
        resolve();
      });
      img.addEventListener("error", () => {
        image.element = void 0;
        image.error = true;
        image.loading = false;
        getLogger().error(`Error loading image: ${image.source}`);
        resolve();
      });
      img.src = image.source;
    });
  }
  async function downloadSvgImage(image) {
    if (image.type !== "svg") {
      await loadImage(image);
      return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (response.ok) {
      image.svgData = await response.text();
    } else {
      getLogger().error("Image not found");
      image.error = true;
    }
    image.loading = false;
  }
  function replaceImageColor(image, imageData, color, particle, hdr = false, peakNits, mode) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity3, hdr, peakNits, mode), imageRes = {
      color,
      data: {
        ...image,
        svgData: svgColoredData
      },
      loaded: false,
      ratio: imageData.width / imageData.height,
      replaceColor: imageData.replaceColor,
      source: imageData.src
    };
    return new Promise((resolve) => {
      const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), url = URL.createObjectURL(svg), img = new Image();
      img.addEventListener("load", () => {
        imageRes.loaded = true;
        imageRes.element = img;
        resolve(imageRes);
        URL.revokeObjectURL(url);
      });
      const errorHandler = async () => {
        URL.revokeObjectURL(url);
        const img2 = {
          ...image,
          error: false,
          loading: true
        };
        await loadImage(img2);
        imageRes.loaded = true;
        imageRes.element = img2.element;
        resolve(imageRes);
      };
      img.addEventListener("error", () => void errorHandler());
      img.src = url;
    });
  }

  // node_modules/@tsparticles/shape-image/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/shape-image/browser/ErrorCodes.js
  var ErrorCodes4 = {
    imageCollectionNotFound: "TSP-2001",
    imageSourceNotFound: "TSP-2002",
    imageNotFound: "TSP-2003",
    imageShapeNotInitialized: "TSP-2004"
  };

  // node_modules/@tsparticles/shape-image/browser/ErrorMessages.js
  var ErrorMessages3 = {
    [ErrorCodes4.imageCollectionNotFound]: "No images collection found",
    [ErrorCodes4.imageSourceNotFound]: "No image source provided",
    [ErrorCodes4.imageNotFound]: "{0} not found",
    [ErrorCodes4.imageShapeNotInitialized]: "Image shape not initialized"
  };

  // node_modules/@tsparticles/shape-image/browser/ImageDrawer.js
  init_browser2();
  var sides2 = 12;
  var ImageDrawer = class {
    #container;
    #engine;
    constructor(engine, container) {
      this.#engine = engine;
      this.#container = container;
    }
    draw(data) {
      const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
      if (!image) {
        return;
      }
      context.globalAlpha = opacity;
      if (element) {
        const ratio = image.ratio, pos = {
          x: -radius,
          y: -radius
        }, diameter = radius * double;
        context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
      }
      context.globalAlpha = defaultAlpha;
    }
    getSidesCount() {
      return sides2;
    }
    async init(container) {
      const options = container.actualOptions;
      if (!options.preload || !this.#engine.loadImage) {
        return;
      }
      const promises = [];
      for (const imageData of options.preload) {
        promises.push(this.#engine.loadImage(container, imageData));
      }
      await Promise.all(promises);
    }
    loadShape(particle) {
      const container = this.#container;
      if (!particle.shape || !shapeTypes.includes(particle.shape)) {
        return;
      }
      const imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const images = this.#engine.getImages?.(container), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (image) {
        return;
      }
      void this.#loadImageShape(container, imageData).then(() => {
        this.loadShape(particle);
      });
    }
    particleInit(container, particle) {
      if (particle.shape !== "image" && particle.shape !== "images") {
        return;
      }
      const images = this.#engine.getImages?.(container), imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const color = particle.getFillColor(), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (!image) {
        return;
      }
      const replaceColor = imageData.replaceColor;
      if (image.loading) {
        setTimeout(() => {
          this.particleInit(container, particle);
        });
        return;
      }
      void (async () => {
        let imageRes;
        if (image.svgData && color) {
          imageRes = await replaceImageColor(image, imageData, color, particle, container.hdr, container.peakNits, container.hdrMode);
        } else {
          imageRes = {
            color,
            data: image,
            element: image.element,
            loaded: true,
            ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
            replaceColor,
            source: imageData.src
          };
        }
        if (!imageRes.ratio) {
          imageRes.ratio = 1;
        }
        const close = imageData.close ?? particle.shapeClose, imageShape = {
          image: imageRes,
          close
        };
        particle.image = imageShape.image;
        particle.shapeClose = imageShape.close;
      })();
    }
    #loadImageShape = async (container, imageShape) => {
      if (!this.#engine.loadImage) {
        throw new Error(getErrorMessage(ErrorCodes4.imageShapeNotInitialized));
      }
      await this.#engine.loadImage(container, {
        name: imageShape.name,
        replaceColor: imageShape.replaceColor,
        src: imageShape.src
      });
    };
  };

  // node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js
  init_browser2();
  var Preload = class {
    height;
    name;
    replaceColor;
    src = "";
    width;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "height", data.height);
      loadProperty(this, "name", data.name);
      loadProperty(this, "replaceColor", data.replaceColor);
      loadProperty(this, "src", data.src);
      loadProperty(this, "width", data.width);
    }
  };

  // node_modules/@tsparticles/shape-image/browser/ImagePreloader.js
  var ImagePreloaderPlugin = class {
    id = "image-preloader";
    #engine;
    constructor(engine) {
      this.#engine = engine;
    }
    async getPlugin(container) {
      const { ImagePreloaderInstance: ImagePreloaderInstance2 } = await Promise.resolve().then(() => (init_ImagePreloaderInstance(), ImagePreloaderInstance_exports));
      return new ImagePreloaderInstance2(this.#engine, container);
    }
    loadOptions(_container, options, source) {
      if (!source?.preload) {
        return;
      }
      options.preload ??= [];
      const preloadOptions = options.preload;
      for (const item of source.preload) {
        const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
        if (existing) {
          existing.load(item);
        } else {
          const preload = new Preload();
          preload.load(item);
          preloadOptions.push(preload);
        }
      }
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/shape-image/browser/index.js
  var extLength = 3;
  function addLoadImageToEngine(engine) {
    engine.getImages ??= (container) => {
      engine.images ??= /* @__PURE__ */ new Map();
      let images = engine.images.get(container);
      if (!images) {
        images = [];
        engine.images.set(container, images);
      }
      return images;
    };
    engine.loadImage ??= async (container, data) => {
      if (!engine.getImages) {
        throw new Error(getErrorMessage(ErrorCodes4.imageCollectionNotFound));
      }
      if (!data.name && !data.src) {
        throw new Error(getErrorMessage(ErrorCodes4.imageSourceNotFound));
      }
      engine.images ??= /* @__PURE__ */ new Map();
      const containerImages = engine.getImages(container);
      if (containerImages.some((t) => t.name === data.name || t.source === data.src)) {
        return;
      }
      try {
        const image = {
          name: data.name ?? data.src,
          source: data.src,
          type: data.src.substring(data.src.length - extLength),
          error: false,
          loading: true,
          replaceColor: data.replaceColor,
          ratio: data.width && data.height ? data.width / data.height : void 0
        };
        containerImages.push(image);
        engine.images.set(container, containerImages);
        let imageFunc;
        if (data.replaceColor) {
          imageFunc = downloadSvgImage;
        } else {
          imageFunc = loadImage;
        }
        await imageFunc(image);
      } catch {
        throw new Error(getErrorMessage(ErrorCodes4.imageNotFound, data.name ?? data.src));
      }
    };
  }
  async function loadImageShape(engine) {
    engine.checkVersion("4.5.4");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages3);
    }
    await engine.pluginManager.register((e) => {
      addLoadImageToEngine(e);
      e.pluginManager.addPlugin(new ImagePreloaderPlugin(e));
      e.pluginManager.addShape(shapeTypes, (container) => Promise.resolve(new ImageDrawer(e, container)));
    });
  }

  // node_modules/@tsparticles/shape-image/browser/browser.js
  var globalObject18 = globalThis;
  globalObject18.__tsParticlesInternals = globalObject18.__tsParticlesInternals ?? {};
  globalObject18.loadImageShape = loadImageShape;

  // node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
  init_browser2();

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js
  init_browser2();
  var LifeDelay = class extends ValueWithRandom {
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js
  init_browser2();
  var LifeDuration = class extends ValueWithRandom {
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
  var Life = class {
    count = 0;
    delay = new LifeDelay();
    duration = new LifeDuration();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "count", data.count);
      this.delay.load(data.delay);
      this.duration.load(data.duration);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Utils.js
  init_browser2();
  var noTime = 0;
  var infiniteValue = -1;
  var noLife = 0;
  var minCanvasSize = 0;
  function updateLife(particle, delta, canvasSize) {
    if (!particle.life) {
      return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
      life.delayTime += delta.value;
      if (life.delayTime >= particle.life.delay) {
        justSpawned = true;
        particle.spawning = false;
        life.delayTime = noTime;
        life.time = noTime;
      } else {
        return;
      }
    }
    if (life.duration === infiniteValue) {
      return;
    }
    if (justSpawned) {
      life.time = noTime;
    } else {
      life.time += delta.value;
    }
    if (life.time < life.duration) {
      return;
    }
    life.time = noTime;
    if (particle.life.count > noLife) {
      particle.life.count--;
    }
    if (particle.life.count === noLife) {
      particle.destroy();
      return;
    }
    const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.height);
    particle.position.x = randomInRangeValue(widthRange);
    particle.position.y = randomInRangeValue(heightRange);
    particle.spawning = true;
    life.delayTime = noTime;
    life.time = noTime;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
      life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
      life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
    }
  }

  // node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
  var noTime2 = 0;
  var identity2 = 1;
  var infiniteValue2 = -1;
  var LifeUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const container = this.#container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
      if (!lifeOptions) {
        return;
      }
      const delayFactor = lifeOptions.delay.sync ? identity2 : getRandom(), durationFactor = lifeOptions.duration.sync ? identity2 : getRandom();
      particle.life = {
        delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * delayFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
        delayTime: noTime2,
        duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * durationFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
        time: noTime2,
        count: lifeOptions.count
      };
      if (particle.life.duration <= noTime2) {
        particle.life.duration = infiniteValue2;
      }
      if (particle.life.count <= noTime2) {
        particle.life.count = infiniteValue2;
      }
      particle.spawning = particle.life.delay > noTime2;
    }
    isEnabled(particle) {
      return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "life", Life, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.life) {
        return;
      }
      updateLife(particle, delta, this.#container.canvas.size);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/index.js
  async function loadLifeUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("life", (container) => {
        return Promise.resolve(new LifeUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-life/browser/browser.js
  var globalObject19 = globalThis;
  globalObject19.__tsParticlesInternals = globalObject19.__tsParticlesInternals ?? {};
  globalObject19.loadLifeUpdater = loadLifeUpdater;

  // node_modules/@tsparticles/plugin-motion/browser/Options/Classes/Motion.js
  init_browser2();

  // node_modules/@tsparticles/plugin-motion/browser/Options/Classes/MotionReduce.js
  init_browser2();
  var MotionReduce = class {
    factor = 4;
    value = true;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "factor", data.factor);
      loadProperty(this, "value", data.value);
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/Options/Classes/Motion.js
  var Motion = class {
    disable = true;
    reduce = new MotionReduce();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "disable", data.disable);
      this.reduce.load(data.reduce);
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/MotionPlugin.js
  var MotionPlugin = class {
    id = "motion";
    async getPlugin(container) {
      const { MotionPluginInstance: MotionPluginInstance2 } = await Promise.resolve().then(() => (init_MotionPluginInstance(), MotionPluginInstance_exports));
      return new MotionPluginInstance2(container);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin()) {
        return;
      }
      let motionOptions = options.motion;
      if (!motionOptions?.load) {
        options.motion = motionOptions = new Motion();
      }
      motionOptions.load(source?.motion);
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/index.js
  async function loadMotionPlugin(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addPlugin(new MotionPlugin());
    });
  }

  // node_modules/@tsparticles/plugin-motion/browser/browser.js
  var globalObject20 = globalThis;
  globalObject20.__tsParticlesInternals = globalObject20.__tsParticlesInternals ?? {};
  globalObject20.loadMotionPlugin = loadMotionPlugin;

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
  init_browser2();

  // node_modules/@tsparticles/shape-polygon/browser/Utils.js
  init_browser2();
  var polygonCache = /* @__PURE__ */ new Map();
  var noOffset = 0;
  function getUnitPolygon(sides5) {
    const cached = polygonCache.get(sides5);
    if (cached) {
      return cached;
    }
    const step = doublePI / sides5, isOdd = !!(sides5 % double), baseAngle = (-Math.PI + (isOdd ? noOffset : step)) * half, verts = [];
    for (let i = 0; i < sides5; i++) {
      const angle = baseAngle + i * step;
      verts[i] = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
    }
    polygonCache.set(sides5, verts);
    return verts;
  }
  function drawPolygon(data, side) {
    const { context, radius } = data, sides5 = side.count.numerator / side.count.denominator, verts = getUnitPolygon(sides5);
    context.beginPath();
    for (let i = 0; i < verts.length; i++) {
      const vert = verts[i];
      if (!vert) {
        continue;
      }
      const x = vert.x * radius, y = vert.y * radius;
      if (i) {
        context.lineTo(x, y);
      } else {
        context.moveTo(x, y);
      }
    }
    context.closePath();
  }

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
  var defaultSides = 5;
  var PolygonDrawerBase = class {
    draw(data) {
      const { particle, radius } = data, side = this.getSidesData(particle, radius);
      drawPolygon(data, side);
    }
    getSidesCount(particle) {
      const polygon = particle.shapeData;
      return Math.round(getRangeValue(polygon?.sides ?? defaultSides));
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js
  var yFactor = 2.66;
  var sidesFactor = 3;
  var PolygonDrawer = class extends PolygonDrawerBase {
    getSidesData(particle, radius) {
      const { sides: sides5 } = particle;
      return {
        count: {
          denominator: 1,
          numerator: sides5
        },
        length: radius * yFactor / (sides5 / sidesFactor)
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js
  var sides3 = 3;
  var yFactor2 = 2.66;
  var sidesFactor2 = 3;
  var TriangleDrawer = class extends PolygonDrawerBase {
    getSidesCount() {
      return sides3;
    }
    getSidesData(_particle, radius) {
      return {
        count: {
          denominator: 1,
          numerator: sides3
        },
        length: radius * yFactor2 / (sides3 / sidesFactor2)
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/index.js
  async function loadGenericPolygonShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["polygon"], () => Promise.resolve(new PolygonDrawer()));
    });
  }
  async function loadTriangleShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["triangle"], () => Promise.resolve(new TriangleDrawer()));
    });
  }
  async function loadPolygonShape(engine) {
    engine.checkVersion("4.5.4");
    await Promise.all([
      loadGenericPolygonShape(engine),
      loadTriangleShape(engine)
    ]);
  }

  // node_modules/@tsparticles/shape-polygon/browser/browser.js
  var globalObject21 = globalThis;
  globalObject21.__tsParticlesInternals = globalObject21.__tsParticlesInternals ?? {};
  globalObject21.loadGenericPolygonShape = loadGenericPolygonShape;
  globalObject21.loadPolygonShape = loadPolygonShape;
  globalObject21.loadTriangleShape = loadTriangleShape;

  // node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/Utils.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/RollMode.js
  var RollMode;
  (function(RollMode2) {
    RollMode2["both"] = "both";
    RollMode2["horizontal"] = "horizontal";
    RollMode2["vertical"] = "vertical";
  })(RollMode || (RollMode = {}));

  // node_modules/@tsparticles/updater-roll/browser/Utils.js
  var maxAngle2 = 360;
  function initParticle(pluginManager, particle) {
    const rollOpt = particle.options.roll;
    if (!rollOpt?.enable) {
      particle.roll = {
        enable: false,
        horizontal: false,
        vertical: false,
        angle: 0,
        speed: 0
      };
      return;
    }
    particle.roll = {
      enable: rollOpt.enable,
      horizontal: rollOpt.mode === RollMode.horizontal || rollOpt.mode === RollMode.both,
      vertical: rollOpt.mode === RollMode.vertical || rollOpt.mode === RollMode.both,
      angle: getRandom() * doublePI,
      speed: getRangeValue(rollOpt.speed) / maxAngle2
    };
    if (rollOpt.backColor) {
      particle.backColor = rangeColorToHsl(pluginManager, rollOpt.backColor);
    } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
      const alterType = getRandom() >= half ? AlterType.darken : AlterType.enlighten;
      particle.roll.alter = {
        type: alterType,
        value: getRangeValue(alterType === AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value)
      };
    } else if (rollOpt.darken.enable) {
      particle.roll.alter = {
        type: AlterType.darken,
        value: getRangeValue(rollOpt.darken.value)
      };
    } else if (rollOpt.enlighten.enable) {
      particle.roll.alter = {
        type: AlterType.enlighten,
        value: getRangeValue(rollOpt.enlighten.value)
      };
    }
  }
  function updateRoll(particle, delta) {
    const roll = particle.options.roll, data = particle.roll;
    if (!data || !roll?.enable) {
      return;
    }
    const speed = data.speed * delta.factor, max = doublePI;
    data.angle += speed;
    if (data.angle > max) {
      data.angle -= max;
    }
  }

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/RollLight.js
  init_browser2();
  var RollLight = class {
    enable = false;
    value = 0;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "value", data.value);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
  var Roll = class {
    backColor;
    darken = new RollLight();
    enable = false;
    enlighten = new RollLight();
    mode = RollMode.vertical;
    speed = 25;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.backColor !== void 0) {
        this.backColor = OptionsColor.create(this.backColor, data.backColor);
      }
      this.darken.load(data.darken);
      loadProperty(this, "enable", data.enable);
      this.enlighten.load(data.enlighten);
      loadProperty(this, "mode", data.mode);
      loadRangeProperty(this, "speed", data.speed);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
  var RollUpdater = class {
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    getTransformValues(particle) {
      const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
      return {
        a: rollHorizontal ? Math.cos(roll.angle) : void 0,
        d: rollVertical ? Math.sin(roll.angle) : void 0
      };
    }
    init(particle) {
      initParticle(this.#pluginManager, particle);
    }
    isEnabled(particle) {
      const roll = particle.options.roll;
      return !particle.destroyed && !particle.spawning && !!roll?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "roll", Roll, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateRoll(particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/index.js
  async function loadRollUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("roll", () => {
        return Promise.resolve(new RollUpdater(e.pluginManager));
      });
    });
  }

  // node_modules/@tsparticles/updater-roll/browser/browser.js
  var globalObject22 = globalThis;
  globalObject22.__tsParticlesInternals = globalObject22.__tsParticlesInternals ?? {};
  globalObject22.loadRollUpdater = loadRollUpdater;

  // node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
  init_browser2();

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js
  init_browser2();
  var RotateAnimation = class {
    decay = 0;
    enable = false;
    speed = 0;
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "speed", data.speed);
      loadRangeProperty(this, "decay", data.decay);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
  var Rotate = class extends ValueWithRandom {
    animation = new RotateAnimation();
    direction = RotateDirection.clockwise;
    path = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "direction", data.direction);
      this.animation.load(data.animation);
      loadProperty(this, "path", data.path);
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
  var doublePIDeg = 360;
  var RotateUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const rotateOptions = particle.options.rotate;
      if (!rotateOptions) {
        return;
      }
      particle.rotate = {
        enable: rotateOptions.animation.enable,
        value: degToRad(getRangeValue(rotateOptions.value)),
        min: 0,
        max: doublePI
      };
      particle.pathRotation = rotateOptions.path;
      let rotateDirection = rotateOptions.direction;
      if (rotateDirection === RotateDirection.random) {
        const index = Math.floor(getRandom() * double);
        rotateDirection = index > minIndex ? RotateDirection.counterClockwise : RotateDirection.clockwise;
      }
      switch (rotateDirection) {
        case RotateDirection.counterClockwise:
        case "counterClockwise":
          particle.rotate.status = AnimationStatus.decreasing;
          break;
        case RotateDirection.clockwise:
          particle.rotate.status = AnimationStatus.increasing;
          break;
        default:
          break;
      }
      const rotateAnimation = rotateOptions.animation;
      if (rotateAnimation.enable) {
        particle.rotate.decay = identity - getRangeValue(rotateAnimation.decay);
        particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.#container.retina.reduceFactor;
        if (!rotateAnimation.sync) {
          particle.rotate.velocity *= getRandom();
        }
      }
      particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
      const rotate = particle.options.rotate;
      if (!rotate) {
        return false;
      }
      return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "rotate", Rotate, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      particle.isRotating = !!particle.rotate;
      if (!particle.rotate) {
        return;
      }
      updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
      particle.rotation = particle.rotate.value;
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/index.js
  async function loadRotateUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("rotate", (container) => {
        return Promise.resolve(new RotateUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-rotate/browser/browser.js
  var globalObject23 = globalThis;
  globalObject23.__tsParticlesInternals = globalObject23.__tsParticlesInternals ?? {};
  globalObject23.loadRotateUpdater = loadRotateUpdater;

  // node_modules/@tsparticles/shape-square/browser/Utils.js
  init_browser2();
  function drawSquare(data) {
    const { context, radius } = data, fixedRadius = radius * Math.SQRT1_2, fixedDiameter = fixedRadius * double;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
  }

  // node_modules/@tsparticles/shape-square/browser/SquareDrawer.js
  var sides4 = 4;
  var SquareDrawer = class {
    draw(data) {
      drawSquare(data);
    }
    getSidesCount() {
      return sides4;
    }
  };

  // node_modules/@tsparticles/shape-square/browser/index.js
  async function loadSquareShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["edge", "square"], () => Promise.resolve(new SquareDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-square/browser/browser.js
  var globalObject24 = globalThis;
  globalObject24.__tsParticlesInternals = globalObject24.__tsParticlesInternals ?? {};
  globalObject24.loadSquareShape = loadSquareShape;

  // node_modules/@tsparticles/shape-star/browser/StarDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-star/browser/Utils.js
  var defaultInset = 2;
  var origin = { x: 0, y: 0 };
  function drawStar(data) {
    const { context, particle, radius } = data, sides5 = particle.sides, inset = particle.starInset ?? defaultInset;
    context.moveTo(origin.x, origin.y - radius);
    for (let i = 0; i < sides5; i++) {
      context.rotate(Math.PI / sides5);
      context.lineTo(origin.x, origin.y - radius * inset);
      context.rotate(Math.PI / sides5);
      context.lineTo(origin.x, origin.y - radius);
    }
  }

  // node_modules/@tsparticles/shape-star/browser/StarDrawer.js
  var defaultInset2 = 2;
  var defaultSides2 = 5;
  var StarDrawer = class {
    draw(data) {
      drawStar(data);
    }
    getSidesCount(particle) {
      const star = particle.shapeData;
      return Math.round(getRangeValue(star?.sides ?? defaultSides2));
    }
    particleInit(_container, particle) {
      const star = particle.shapeData;
      particle.starInset = getRangeValue(star?.inset ?? defaultInset2);
    }
  };

  // node_modules/@tsparticles/shape-star/browser/index.js
  async function loadStarShape(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["star"], () => Promise.resolve(new StarDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-star/browser/browser.js
  var globalObject25 = globalThis;
  globalObject25.__tsParticlesInternals = globalObject25.__tsParticlesInternals ?? {};
  globalObject25.loadStarShape = loadStarShape;

  // node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
  init_browser2();

  // node_modules/@tsparticles/updater-tilt/browser/TiltDirection.js
  var TiltDirection;
  (function(TiltDirection2) {
    TiltDirection2["clockwise"] = "clockwise";
    TiltDirection2["counterClockwise"] = "counter-clockwise";
    TiltDirection2["random"] = "random";
  })(TiltDirection || (TiltDirection = {}));

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/TiltAnimation.js
  init_browser2();
  var TiltAnimation = class {
    decay = 0;
    enable = false;
    speed = 0;
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "speed", data.speed);
      loadRangeProperty(this, "decay", data.decay);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
  var Tilt = class extends ValueWithRandom {
    animation = new TiltAnimation();
    direction = TiltDirection.clockwise;
    enable = false;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      this.animation.load(data.animation);
      loadProperty(this, "direction", data.direction);
      loadProperty(this, "enable", data.enable);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
  var maxAngle3 = 360;
  var TiltUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    getTransformValues(particle) {
      const tilt = particle.tilt?.enable && particle.tilt;
      return {
        b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : void 0,
        c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : void 0
      };
    }
    init(particle) {
      const tiltOptions = particle.options.tilt;
      if (!tiltOptions) {
        return;
      }
      particle.tilt = {
        enable: tiltOptions.enable,
        value: degToRad(getRangeValue(tiltOptions.value)),
        sinDirection: getRandom() >= half ? identity : -identity,
        cosDirection: getRandom() >= half ? identity : -identity,
        min: 0,
        max: doublePI
      };
      let tiltDirection = tiltOptions.direction;
      if (tiltDirection === TiltDirection.random) {
        const index = Math.floor(getRandom() * double);
        tiltDirection = index > minIndex ? TiltDirection.counterClockwise : TiltDirection.clockwise;
      }
      switch (tiltDirection) {
        case TiltDirection.counterClockwise:
        case "counterClockwise":
          particle.tilt.status = AnimationStatus.decreasing;
          break;
        case TiltDirection.clockwise:
          particle.tilt.status = AnimationStatus.increasing;
          break;
        default:
          break;
      }
      const tiltAnimation = particle.options.tilt?.animation;
      if (tiltAnimation?.enable) {
        particle.tilt.decay = identity - getRangeValue(tiltAnimation.decay);
        particle.tilt.velocity = getRangeValue(tiltAnimation.speed) / maxAngle3 * this.#container.retina.reduceFactor;
        if (!tiltAnimation.sync) {
          particle.tilt.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const tiltAnimation = particle.options.tilt?.animation;
      return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "tilt", Tilt, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.tilt) {
        return;
      }
      updateAnimation(particle, particle.tilt, false, DestroyType.none, delta);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/index.js
  async function loadTiltUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("tilt", (container) => {
        return Promise.resolve(new TiltUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-tilt/browser/browser.js
  var globalObject26 = globalThis;
  globalObject26.__tsParticlesInternals = globalObject26.__tsParticlesInternals ?? {};
  globalObject26.loadTiltUpdater = loadTiltUpdater;

  // node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
  init_browser2();

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/WobbleSpeed.js
  init_browser2();
  var WobbleSpeed = class {
    angle = 50;
    move = 10;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "angle", data.angle);
      loadRangeProperty(this, "move", data.move);
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
  var Wobble = class {
    distance = 5;
    enable = false;
    speed = new WobbleSpeed();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "distance", data.distance);
      loadProperty(this, "enable", data.enable);
      if (data.speed !== void 0) {
        if (isNumber(data.speed)) {
          this.speed.load({ angle: data.speed });
        } else {
          const rangeSpeed = data.speed;
          if ("min" in rangeSpeed) {
            this.speed.load({ angle: rangeSpeed });
          } else {
            this.speed.load(data.speed);
          }
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Utils.js
  init_browser2();
  var defaultDistance = 0;
  var distanceFactor = 60;
  function updateWobble(container, particle, delta) {
    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;
    if (!wobbleOptions?.enable || !wobble) {
      return;
    }
    const reduceFactor = container.retina.reduceFactor, angleSpeed = wobble.angleSpeed * delta.factor * reduceFactor, moveSpeed = wobble.moveSpeed * delta.factor * reduceFactor, distance = moveSpeed * (particle.retina.wobbleDistance ?? defaultDistance) / (millisecondsToSeconds / distanceFactor), max = doublePI, { position } = particle;
    wobble.angle += angleSpeed;
    if (wobble.angle > max) {
      wobble.angle -= max;
    }
    position.x += distance * Math.cos(wobble.angle);
    position.y += distance * Math.abs(Math.sin(wobble.angle));
  }

  // node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
  var maxAngle4 = 360;
  var moveSpeedFactor2 = 10;
  var defaultDistance2 = 0;
  var WobbleUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const wobbleOpt = particle.options.wobble;
      if (wobbleOpt?.enable) {
        particle.wobble = {
          angle: getRandom() * doublePI,
          angleSpeed: getRangeValue(wobbleOpt.speed.angle) / maxAngle4,
          moveSpeed: getRangeValue(wobbleOpt.speed.move) / moveSpeedFactor2
        };
      } else {
        particle.wobble = {
          angle: 0,
          angleSpeed: 0,
          moveSpeed: 0
        };
      }
      particle.retina.wobbleDistance = getRangeValue(wobbleOpt?.distance ?? defaultDistance2) * this.#container.retina.pixelRatio;
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "wobble", Wobble, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateWobble(this.#container, particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/index.js
  async function loadWobbleUpdater(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("wobble", (container) => {
        return Promise.resolve(new WobbleUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-wobble/browser/browser.js
  var globalObject27 = globalThis;
  globalObject27.__tsParticlesInternals = globalObject27.__tsParticlesInternals ?? {};
  globalObject27.loadWobbleUpdater = loadWobbleUpdater;

  // node_modules/@tsparticles/confetti/browser/utils.js
  init_browser2();

  // node_modules/@tsparticles/confetti/browser/ConfettiOptions.js
  init_browser2();
  var ConfettiOptions = class {
    angle;
    colors;
    count;
    decay;
    disableForReducedMotion;
    drift;
    flat;
    gravity;
    position;
    scalar;
    shapeOptions;
    shapes;
    spread;
    startVelocity;
    ticks;
    zIndex;
    constructor() {
      this.angle = 90;
      this.count = 50;
      this.spread = 45;
      this.startVelocity = 45;
      this.decay = 0.9;
      this.gravity = 1;
      this.drift = 0;
      this.ticks = 200;
      this.position = {
        x: 50,
        y: 50
      };
      this.colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];
      this.shapes = ["square", "circle"];
      this.scalar = 1;
      this.zIndex = 100;
      this.disableForReducedMotion = true;
      this.flat = false;
      this.shapeOptions = {};
    }
    get origin() {
      return {
        x: this.position.x / percentDenominator,
        y: this.position.y / percentDenominator
      };
    }
    set origin(value) {
      this.position.x = value.x * percentDenominator;
      this.position.y = value.y * percentDenominator;
    }
    get particleCount() {
      return this.count;
    }
    set particleCount(value) {
      this.count = value;
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "angle", data.angle);
      const count = data.count ?? data.particleCount;
      if (count !== void 0) {
        this.count = count;
      }
      loadProperty(this, "spread", data.spread);
      loadProperty(this, "startVelocity", data.startVelocity);
      loadProperty(this, "decay", data.decay);
      loadProperty(this, "flat", data.flat);
      loadProperty(this, "gravity", data.gravity);
      loadProperty(this, "drift", data.drift);
      loadProperty(this, "ticks", data.ticks);
      const origin2 = data.origin;
      if (origin2 && !data.position) {
        data.position = {
          x: origin2.x === void 0 ? void 0 : origin2.x * percentDenominator,
          y: origin2.y === void 0 ? void 0 : origin2.y * percentDenominator
        };
      }
      const position = data.position;
      if (position) {
        if (position.x !== void 0) {
          this.position.x = position.x;
        }
        if (position.y !== void 0) {
          this.position.y = position.y;
        }
      }
      if (data.colors !== void 0) {
        if (isArray(data.colors)) {
          this.colors = [...data.colors];
        } else {
          this.colors = data.colors;
        }
      }
      const options = data.shapeOptions;
      if (options !== void 0) {
        for (const shape in options) {
          const item = options[shape];
          if (item) {
            this.shapeOptions[shape] = deepExtend(this.shapeOptions[shape] ?? {}, item);
          }
        }
      }
      if (data.shapes !== void 0) {
        if (isArray(data.shapes)) {
          this.shapes = [...data.shapes];
        } else {
          this.shapes = data.shapes;
        }
      }
      loadProperty(this, "scalar", data.scalar);
      loadProperty(this, "zIndex", data.zIndex);
      loadProperty(this, "disableForReducedMotion", data.disableForReducedMotion);
    }
  };

  // node_modules/@tsparticles/confetti/browser/utils.js
  var defaultGravity = 9.81;
  var sizeFactor = 5;
  var speedFactor = 3;
  var decayOffset2 = 1;
  var disableRotate = 0;
  var disableTilt = 0;
  var noOpacityChange = 0;
  var ids = /* @__PURE__ */ new Map();
  var minTicks = 0;
  async function addEmitter(container, actualOptions, opacitySpeed) {
    await container.addEmitter?.({
      startCount: actualOptions.count,
      position: actualOptions.position,
      size: {
        width: 0,
        height: 0
      },
      rate: {
        delay: 0,
        quantity: 0
      },
      life: {
        duration: 0.1,
        count: 1
      },
      particles: {
        paint: {
          fill: {
            color: {
              value: actualOptions.colors
            },
            enable: true
          }
        },
        shape: {
          type: actualOptions.shapes,
          options: actualOptions.shapeOptions
        },
        life: {
          count: 1
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            sync: true,
            speed: opacitySpeed,
            startValue: "max",
            destroy: "min",
            count: 1
          }
        },
        size: {
          value: sizeFactor * actualOptions.scalar
        },
        move: {
          angle: {
            value: actualOptions.spread,
            offset: 0
          },
          drift: {
            min: -actualOptions.drift,
            max: actualOptions.drift
          },
          gravity: {
            acceleration: actualOptions.gravity * defaultGravity
          },
          speed: actualOptions.startVelocity * speedFactor,
          decay: decayOffset2 - actualOptions.decay,
          direction: -actualOptions.angle
        },
        rotate: {
          value: actualOptions.flat ? disableRotate : {
            min: 0,
            max: 360
          },
          direction: "random",
          animation: {
            enable: !actualOptions.flat,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: !actualOptions.flat,
          value: actualOptions.flat ? disableTilt : {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: !actualOptions.flat,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: !actualOptions.flat,
          speed: {
            min: -15,
            max: 15
          }
        }
      }
    });
  }
  function convertOptions(actualOptions, params, opacitySpeed) {
    return {
      fullScreen: {
        enable: !params.canvas,
        zIndex: actualOptions.zIndex
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 0
        },
        paint: {
          fill: {
            color: {
              value: actualOptions.colors
            },
            enable: true
          }
        },
        shape: {
          type: actualOptions.shapes,
          options: actualOptions.shapeOptions
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            sync: true,
            speed: opacitySpeed,
            startValue: "max",
            destroy: "min",
            count: 1
          }
        },
        size: {
          value: sizeFactor * actualOptions.scalar
        },
        links: {
          enable: false
        },
        life: {
          count: 1
        },
        move: {
          angle: {
            value: actualOptions.spread,
            offset: 0
          },
          drift: {
            min: -actualOptions.drift,
            max: actualOptions.drift
          },
          enable: true,
          gravity: {
            enable: true,
            acceleration: actualOptions.gravity * defaultGravity
          },
          speed: actualOptions.startVelocity * speedFactor,
          decay: decayOffset2 - actualOptions.decay,
          direction: -actualOptions.angle,
          random: true,
          straight: false,
          outModes: {
            top: "none",
            default: "destroy"
          }
        },
        rotate: {
          value: actualOptions.flat ? disableRotate : {
            min: 0,
            max: 360
          },
          direction: "random",
          animation: {
            enable: !actualOptions.flat,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: !actualOptions.flat,
          value: actualOptions.flat ? disableTilt : {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: !actualOptions.flat,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: !actualOptions.flat,
          speed: {
            min: -15,
            max: 15
          }
        }
      },
      motion: {
        disable: actualOptions.disableForReducedMotion
      },
      emitters: {
        name: "confetti",
        startCount: actualOptions.count,
        position: actualOptions.position,
        size: {
          width: 0,
          height: 0
        },
        rate: {
          delay: 0,
          quantity: 0
        },
        life: {
          duration: 0.1,
          count: 1
        }
      }
    };
  }
  async function setConfetti(engine, params) {
    const actualOptions = new ConfettiOptions();
    actualOptions.load(params.options);
    const fpsLimit = 120, safeTicks = Number.isFinite(actualOptions.ticks) && actualOptions.ticks > minTicks ? actualOptions.ticks : void 0, opacitySpeed = safeTicks === void 0 ? noOpacityChange : fpsLimit * percentDenominator / (defaultFps * safeTicks);
    let containerOrPromise = ids.get(params.id);
    if (containerOrPromise instanceof Promise) {
      await containerOrPromise;
      containerOrPromise = ids.get(params.id);
    }
    const container = containerOrPromise;
    if (container && !container.destroyed) {
      const alias = container;
      if ("addEmitter" in alias) {
        await addEmitter(alias, actualOptions, opacitySpeed);
        return container;
      }
    }
    const create = async () => {
      const particlesOptions = convertOptions(actualOptions, params, opacitySpeed), newContainer = await engine.load({
        id: params.id,
        element: params.canvas,
        options: particlesOptions
      });
      ids.set(params.id, newContainer);
      return newContainer;
    }, createPromise = create();
    ids.set(params.id, createPromise);
    return createPromise;
  }

  // node_modules/@tsparticles/confetti/browser/confetti.js
  var initPromise = null;
  async function doInitPlugins(engine) {
    engine.checkVersion("4.5.4");
    await engine.pluginManager.register(async (e) => {
      await Promise.all([
        loadBasic(e),
        loadMotionPlugin(e),
        loadEmittersPluginSimple(e),
        loadCardSuitsShape(e),
        loadHeartShape(e),
        loadImageShape(e),
        loadPolygonShape(e),
        loadSquareShape(e),
        loadStarShape(e),
        loadEmojiShape(e),
        loadRotateUpdater(e),
        loadLifeUpdater(e),
        loadRollUpdater(e),
        loadTiltUpdater(e),
        loadWobbleUpdater(e)
      ]);
    });
  }
  async function initPlugins(engine) {
    if (initPromise) {
      return initPromise;
    }
    initPromise = doInitPlugins(engine);
    return initPromise;
  }
  async function confetti(idOrOptions, confettiOptions) {
    await initPlugins(tsParticles);
    let options, id;
    if (isString(idOrOptions)) {
      id = idOrOptions;
      options = confettiOptions ?? {};
    } else {
      id = "confetti";
      options = idOrOptions;
    }
    return setConfetti(tsParticles, {
      id,
      options
    });
  }
  confetti.create = async (canvas, options = {}) => {
    await initPlugins(tsParticles);
    const id = canvas?.getAttribute("id") ?? "confetti";
    canvas?.setAttribute("id", id);
    await setConfetti(tsParticles, {
      id,
      canvas: canvas ?? void 0,
      options
    });
    return async (idOrOptions, confettiOptions) => {
      let subOptions, subId;
      if (isString(idOrOptions)) {
        subId = idOrOptions;
        subOptions = confettiOptions ?? options;
      } else {
        subId = id;
        subOptions = idOrOptions;
      }
      return setConfetti(tsParticles, {
        id: subId,
        canvas: canvas ?? void 0,
        options: subOptions
      });
    };
  };
  confetti.init = async () => {
    await initPlugins(tsParticles);
  };
  confetti.version = "4.5.4";
  globalThis.confetti = confetti;

  // node_modules/@tsparticles/confetti/browser/browser.js
  var globalObject28 = globalThis;
  globalObject28.__tsParticlesInternals = globalObject28.__tsParticlesInternals ?? {};
  globalObject28.confetti = confetti;

  // firework.js
  var heroTitle = document.querySelector(".hero-title");
  var launchSound = new Audio("assets/sounds/launch1.ogg");
  var blastSound = new Audio("assets/sounds/blast1.ogg");
  var twinkleSound = new Audio("assets/sounds/twinkle1.ogg");
  var minecraftDyeColors = [
    "#3AB3DA",
    "#B02E26",
    "#80C71F",
    "#FED83D",
    "#C74EBD",
    "#F9801D"
  ];
  var sparkSources = [
    "assets/particles/spark_0.png",
    "assets/particles/spark_2.png",
    "assets/particles/spark_4.png"
  ];
  [launchSound, blastSound, twinkleSound].forEach((sound) => {
    sound.preload = "auto";
  });
  var loadImage2 = (source) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load firework particle sprite: ${source}`));
    image.src = source;
  });
  var tintSprite = (image, color) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Unable to create a canvas for tinting firework particles.");
    }
    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0);
    context.globalCompositeOperation = "source-in";
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
  };
  var tintedParticleImages = Promise.all(sparkSources.map(loadImage2)).then((images) => minecraftDyeColors.flatMap((color) => images.map((image) => ({
    src: tintSprite(image, color),
    width: 16,
    height: 16
  }))));
  var playSound = (template, volume = 1) => {
    const sound = template.cloneNode();
    sound.volume = volume;
    const playback = sound.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch((error) => console.warn("Unable to play the firework sound.", error));
    }
  };
  var triggerFirework = () => {
    playSound(launchSound);
    window.setTimeout(() => {
      playSound(blastSound);
      tintedParticleImages.then((image) => {
        confetti({
          position: {
            x: 15 + Math.random() * 70,
            y: 15 + Math.random() * 50
          },
          shapes: ["image"],
          shapeOptions: { image },
          particleCount: 90 + Math.floor(Math.random() * 31),
          spread: 360,
          startVelocity: 40 + Math.random() * 12,
          gravity: 0.8,
          scalar: 1.8,
          flat: true
        });
      }).catch((error) => console.error("Unable to prepare colored firework particles.", error));
      window.setTimeout(() => playSound(twinkleSound, 0.6), 200);
    }, 500);
  };
  if (heroTitle) {
    heroTitle.addEventListener("click", triggerFirework);
  }
})();
