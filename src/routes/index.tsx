import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation, DocumentHead } from "@builder.io/qwik-city";
import { getContent, RegisteredComponent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";

import { HeroItem } from "~/components/widgets/Hero";
import { FeaturesItem } from "~/components/widgets/Features";
import { FaqsItem } from "~/components/widgets/Faqs";
import { CallToActionItem } from "~/components/widgets/CallToAction";

export const BUILDER_PUBLIC_API_KEY = 'edda39be50be49b9ae9ea5964be965f3';
export const BUILDER_MODEL = "page";

// Input types can be found at:
// https://www.builder.io/c/docs/custom-components-input-types#required
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  HeroItem,
  FeaturesItem,
  FaqsItem,
  CallToActionItem,
];

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
          customComponents={CUSTOM_COMPONENTS}
        />
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "OpenSaMD & RAi",
  meta: [
    {
      name: "description",
      content:
        "We help you commercialise your open source medical software.",
    },
  ],
};
