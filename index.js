/**
 * @file mofron-comp-close/index.js
 * @brief close component for mofron
 * @feature target component is invisible when a close component is clicked.
 * @license MIT
 */
const Text = require("mofron-comp-text");
const Click = require("mofron-event-click");
const comutl = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (key-value) component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("Close");
	    /* init config */
	    this.confmng().add("closeTgt", { type: "Component" });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            this.closeComp(
	        new Text({ text: "&times;", style: { "text-align": "center" }, size: "0.3rem" })
	    );
	    this.child(this.closeComp());
            
	    this.size("0.3rem","0.3rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close target setter/getter
     * 
     * @param (mixed) string: component object key
     *                mofron.class.Component: close target component
     *                undefined: call as getter
     * @return (mofron.class.Component) close target component
     * @type parameter
     */
    closeTgt (prm) {
        try {
	    if ("string" === typeof prm) {
                prm = mofron.objkey[prm];
            }
	    return this.confmng("closeTgt", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close component setter/getter
     *
     * @param (mofron.class.Component) close component
     *                                 undefined: call as getter
     * @return (mofron.class.Component) close component
     * @type parameter
     */
    closeComp (prm) {
        try {
            if (true === comutl.isinc(prm, "Component")) {
                let clk = (c1,c2,c3) => {
                    try {
                        c3.closeTgt().visible(false);
		    } catch (e) {
                        console.error(e.stack);
                        throw e;
		    }
		}
                prm.event(new Click(new ConfArg(clk,this)));
	    }
            return this.innerComp("closeComp", prm, mofron.class.Component);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close height setter/getter
     *
     * @param (string(size)) height size
     *                       undefined: call as getter
     * @param (key-value) style option 
     * @return (mixed) string(size): height size
     *                 null: not set
     * @type parameter
     */
    height (prm, opt) {
        try {
	    let ret = super.height(prm, opt);
            this.closeComp().height(prm,opt);
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * close width setter/getter
     * 
     * @param (string(size)) width size
     *                       undefined: call as getter
     * @param (key-value) style option
     * @return (mixed) string(size): width size
     *                 null: not set
     * @type parameter
     */
    width (prm, opt) {
        try {
            let ret = super.width(prm, opt);
            this.closeComp().width(prm,opt);
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
