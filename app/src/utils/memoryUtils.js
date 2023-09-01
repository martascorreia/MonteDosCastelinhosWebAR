export const memoryManagement = () => {
    // ==== MEMORY MANAGEMENT ====
    // Dispose hierarchy
    window.disposeHierarchy = function (node) {
        engineParameters.scene.remove(node)
        sceneTraverse(node, dO0 => {
            if (dO0.geometry) dO0.geometry.dispose()
            if (dO0.material) {
                if (dO0.material.length) {
                    for (processMemory.hD0 = 0; processMemory.hD0 < dO0.material.length; ++processMemory.hD0)disposeResources(dO0.material[processMemory.hD0])
                } else disposeResources(dO0.material)
            }
            dO0 = undefined
        })
        engineParameters.renderer.renderLists.dispose()
        node = undefined
    }
    // Scene traverse
    const sceneTraverse = (obj, fn) => {
        if (!obj) return
        fn(obj)
        if (obj.children && obj.children.length > 0) {
            obj.children.forEach(o => {
                sceneTraverse(o, fn)
            })
        }
        obj = fn = undefined
    }
    // Dispose resources
    function disposeResources(mtrl) {
        if (mtrl.alphaMap) {
            mtrl.alphaMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.alphaMap.source.uuid))
        }
        if (mtrl.aoMap) {
            mtrl.aoMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.aoMap.source.uuid))
        }
        if (mtrl.blendDstAlpha) {
            mtrl.blendDstAlpha.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.blendDstAlpha.source.uuid))
        }
        if (mtrl.blendEquationAlpha) {
            mtrl.blendEquationAlpha.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.blendEquationAlpha.source.uuid))
        }
        if (mtrl.blendSrcAlpha) {
            mtrl.blendSrcAlpha.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.blendSrcAlpha.source.uuid))
        }
        if (mtrl.bumpMap) {
            mtrl.bumpMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.bumpMap.source.uuid))
        }
        if (mtrl.displacementMap) {
            mtrl.displacementMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.displacementMap.source.uuid))
        }
        if (mtrl.emissiveMap) {
            mtrl.emissiveMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.emissiveMap.source.uuid))
        }
        if (mtrl.envMap) {
            mtrl.envMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.envMap.source.uuid))
        }
        if (mtrl.lightMap) {
            mtrl.lightMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.lightMap.source.uuid))
        }
        if (mtrl.map) {
            mtrl.map.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.map.source.uuid))
        }
        if (mtrl.metalnessMap) {
            mtrl.metalnessMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.metalnessMap.source.uuid))
        }
        if (mtrl.normalMap) {
            mtrl.normalMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.normalMap.source.uuid))
        }
        if (mtrl.roughnessMap) {
            mtrl.roughnessMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.roughnessMap.source.uuid))
        }
        if (mtrl.specularMap) {
            mtrl.specularMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.specularMap.source.uuid))
        }
        if (mtrl.gradientMap) {
            mtrl.gradientMap.dispose()
            engineParameters.scene.remove(engineParameters.scene.getObjectById(mtrl.gradientMap.source.uuid))
        }
        mtrl.dispose()
        mtrl = undefined
    }
};