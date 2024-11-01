import { u as useTreeStore, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[categoryName]",
  __ssrInlineRender: true,
  setup(__props) {
    const treeStore = useTreeStore();
    const route = useRoute();
    const title = computed(() => treeStore.selectedLanguage === "ru" ? "Подкатегории" : "Subcategories");
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
      const _component_NuxtLink = __nuxt_component_0;
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
        _push(`<p class="text-gray-500"> Подкатегорий нет. </p>`);
      } else {
        _push(`<p class="text-gray-500">Загрузка подкатегорий...</p>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_categoryName_-CKWfPoxG.js.map
