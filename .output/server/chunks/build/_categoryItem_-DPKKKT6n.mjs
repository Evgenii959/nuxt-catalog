import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useTreeStore } from './server.mjs';
import { useRoute } from 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

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
