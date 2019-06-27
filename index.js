/**
 * @file  mofron-comp-close/index.js
 * @brief close component for mofron
 * @feature target component is invisible when a close component is clicked.
 * @author simpart
 */
const mf = require("mofron");
const Text = require("mofron-comp-text");
const Click = require("mofron-event-click");

mf.comp.Close = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (object) object: component option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Close");
            this.prmOpt(po);
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
            this.closeComp(new Text("&times;"));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close target component setter/getter
     * 
     * @param (string/component) string: component name
     *                           component: close target component
     * @return (string/component) close target component
     * @type parameter
     */
    closeTgt (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_clstgt) ? this.parent() : this.m_clstgt;
            }
            /* setter */
            if ("string" === typeof prm) {
                prm = mf.objkey[prm];
            }
            this.m_clstgt = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close component
     *
     * @param (component) close component
     * @return (component) close component
     * @type parameter
     */
    closeComp (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.child()[0];
            }
            /* setter */
            if (false === mf.func.isComp(prm)) {
                throw new Error("invalid parameter");
            }
            let cls = this;
            prm.event(
                new Click(() => {
                    try { cls.closeTgt().visible(false); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                })
            );
            this.styleTgt(prm.target());
            this.eventTgt(prm.target());
            
            if (0 < this.child().length) {
                this.updChild(this.child()[0], prm);
            } else {
                this.child(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * close size
     *
     * @param (string (size)) width size
     * @param (string (sizde)) height size
     * @type parameter
     */
    size (prm, p2) {
        try { return this.child()[0].size(prm,p2); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Close;
/* end of file */
