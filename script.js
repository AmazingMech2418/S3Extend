function findReactComponent(element) {
  let fiber = element[Object.keys(element).find(key => key.startsWith("__reactInternalInstance$"))];
  if (fiber == null) return null;
  
  const go = fiber => {
    let parent = fiber.return;
    while (typeof parent.type == "string") {
      parent = parent.return;
    }
    return parent;
  };
  
  fiber = go(fiber);    
  while(fiber.stateNode == null) {
    fiber = go(fiber);
  }
  return fiber.stateNode;
}

window.vm = findReactComponent(document.getElementsByClassName("stage-header_stage-size-row_14N65")[0]).props.vm;

class S3Extend {
    constructor(runtime) {
        this.runtime = runtime;
    }
    
    getInfo() {
        return {
            id: "math",
            name: "S3Extend",
            blocks: [],
            menus: {}
        };
    }
}


const Scratch = {
  BlockType: {
    /**
     * Boolean reporter with hexagonal shape
     */
    BOOLEAN: 'Boolean',

    /**
     * A button (not an actual block) for some special action, like making a variable
     */
    BUTTON: 'button',

    /**
     * Command block
     */
    COMMAND: 'command',

    /**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */
    CONDITIONAL: 'conditional',

    /**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */
    EVENT: 'event',

    /**
     * Hat block which conditionally starts a block stack
     */
    HAT: 'hat',

    /**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */
    LOOP: 'loop',

    /**
     * General reporter with numeric or string value
     */
    REPORTER: 'reporter'
  },
  ArgumentType: {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',

    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',

    /**
     * Numeric value with color picker
     */
    COLOR: 'color',

    /**
     * Numeric value with text field
     */
    NUMBER: 'number',

    /**
     * String value with text field
     */
    STRING: 'string',

    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',

    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',

    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image'
  },
  TargetType: {
    /**
     * Rendered target which can move, change costumes, etc.
     */
    SPRITE: 'sprite',

    /**
     * Rendered target which cannot move but can change backdrops
     */
    STAGE: 'stage'
  },
  ReporterScope: {
    /**
     * This reporter's value is global and does not depend on context.
     */
    GLOBAL: 'global',

    /**
     * This reporter's value is specific to a particular target/sprite.
     * Another target may have a different value or may not even have a value.
     */
    TARGET: 'target'
  },
  extensions: {
    register: ext => {
      
    }
  }
};


(function() {
    var extensionInstance = new PrimeExt(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
