import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue/server-renderer/index.mjs';
import { u as useTreeStore } from './server.mjs';
import { useRoute } from 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/h3/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/devalue/index.js';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/ufo/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/destr/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/klona/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/scule/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/defu/dist/defu.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/ohash/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/pathe/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unhead/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/unctx/dist/index.mjs';
import 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[categoryItem]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const treeStore = useTreeStore();
    const selectedCategories = computed(() => {
      const categoryPath = route.path;
      const categoryChild = treeStore.treeData.find((item) => {
        return item.childs.some((child) => {
          var _a;
          const childLink = "/" + ((_a = child.locale[treeStore.selectedLanguage]) == null ? void 0 : _a.link);
          return childLink === categoryPath;
        });
      });
      if (categoryChild) {
        const childItem = categoryChild.childs.find((child) => {
          var _a;
          const childLink = "/" + ((_a = child.locale[treeStore.selectedLanguage]) == null ? void 0 : _a.link);
          return childLink === categoryPath;
        });
        return childItem || null;
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if (selectedCategories.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-10 min-h-screen" }, _attrs))}><h2 class="text-3xl font-semibold mb-4 text-gray-800">${ssrInterpolate((_a = selectedCategories.value.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _a.cg_name)}</h2><p class="text-sm text-gray-600">${ssrInterpolate((_b = selectedCategories.value.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _b.cg_description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[categoryItem]/[categoryItem].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_categoryItem_-DPKKKT6n.mjs.map
