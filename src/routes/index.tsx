import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { getContent, RegisteredComponent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

export const BUILDER_PUBLIC_API_KEY = 'edda39be50be49b9ae9ea5964be965f3';
export const BUILDER_MODEL = "page";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Hero,
    name: 'Hero',
    builtIn: true,
    inputs: [],
  },
  {
    component: Features,
    name: 'Features',
    builtIn: true,
    inputs: [],
  },
  {
    component: FAQs,
    name: 'FAQs',
    builtIn: true,
    inputs: [],
  },
  {
    component: Stats,
    name: 'Stats',
    builtIn: true,
    inputs: [],
  },
  {
    component: CallToAction,
    name: 'CallToAction',
    builtIn: true,
    inputs: [],
  },
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


// import { component$ } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

// export default component$(() => {
//   return (
//     <>
//       <Hero />
//       <Features />
//       <FAQs />
//       <Stats />
//       <CallToAction />
//     </>
//   );
// });

// export const head: DocumentHead = {
//   title: "OpenSaMD & RAi",
//   meta: [
//     {
//       name: "description",
//       content:
//         "We help you commercialise your open source medical software.",
//     },
//   ],
// };
