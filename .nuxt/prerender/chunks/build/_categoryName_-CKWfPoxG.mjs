import { u as useTreeStore, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///Users/evgeniy/Desktop/dev-new/nuxt-catalog/node_modules/vue/server-renderer/index.mjs';
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
  __name: "[categoryName]",
  __ssrInlineRender: true,
  setup(__props) {
    const treeStore = useTreeStore();
    const route = useRoute();
    const title = computed(() => treeStore.selectedLanguage === "ru" ? "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438" : "Subcategories");
    const selectedCategories = computed(() => {
      const categoryPath = route.path;
      const category = treeStore.treeData.find(
        (cat) => {
          var _a;
          return "/" + ((_a = cat.locale[treeStore.selectedLanguage]) == null ? void 0 : _a.link) === categoryPath;
        }
      );
      return (category == null ? void 0 : category.childs) || [];
    });
    function getSubCategoryLink(subCategory) {
      var _a;
      const link = (_a = subCategory.locale[treeStore.selectedLanguage]) == null ? void 0 : _a.link;
      return link ? `/${link}` : `/${subCategory.id}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-10 min-h-screen" }, _attrs))}><h2 class="text-3xl font-semibold mb-4 text-gray-800">${ssrInterpolate(title.value)}</h2>`);
      if (selectedCategories.value.length) {
        _push(`<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"><!--[-->`);
        ssrRenderList(selectedCategories.value, (subCategory) => {
          _push(`<li class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: getSubCategoryLink(subCategory),
            class: "block p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d;
              if (_push2) {
                _push2(`<h3 class="text-xl font-bold text-gray-800 mb-2"${_scopeId}>${ssrInterpolate((_a = subCategory.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _a.cg_name)}</h3><p class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate((_b = subCategory.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _b.cg_description)}</p>`);
              } else {
                return [
                  createVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, toDisplayString((_c = subCategory.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _c.cg_name), 1),
                  createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString((_d = subCategory.locale[unref(treeStore).selectedLanguage]) == null ? void 0 : _d.cg_description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else if (selectedCategories.value && selectedCategories.value.length === 0) {
        _push(`<p class="text-gray-500"> \u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u043D\u0435\u0442. </p>`);
      } else {
        _push(`<p class="text-gray-500">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439...</p>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[categoryName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_categoryName_-CKWfPoxG.mjs.map
