var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(t,i,e,s){var o=function(i){this._core=i,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,i,e){t.namespace&&this.play(i,e)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},o.Defaults,this._core.options)};o.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},o.prototype._next=function(s){this._call=i.setTimeout(t.proxy(this._next,this,s),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("busy")||this._core.is("interacting")||e.hidden||this._core.next(s||this._core.settings.autoplaySpeed)},o.prototype.read=function(){return(new Date).getTime()-this._time},o.prototype.play=function(e,s){var o;this._core.is("rotating")||this._core.enter("rotating"),e=e||this._core.settings.autoplayTimeout,o=Math.min(this._time%(this._timeout||e),e),this._paused?(this._time=this.read(),this._paused=!1):i.clearTimeout(this._call),this._time+=this.read()%e-o,this._timeout=e,this._call=i.setTimeout(t.proxy(this._next,this,s),e-o)},o.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,i.clearTimeout(this._call),this._core.leave("rotating"))},o.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,i.clearTimeout(this._call))},o.prototype.destroy=function(){var t,i;this.stop();for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=o}(window.Zepto||window.jQuery,window,document);

}
/*
     FILE ARCHIVED ON 15:06:56 Dec 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:19:56 May 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.771
  exclusion.robots: 0.049
  exclusion.robots.policy: 0.028
  esindex: 0.015
  cdx.remote: 64.683
  LoadShardBlock: 58.68 (3)
  PetaboxLoader3.datanode: 70.316 (4)
  load_resource: 111.795
  PetaboxLoader3.resolve: 74.0
*/