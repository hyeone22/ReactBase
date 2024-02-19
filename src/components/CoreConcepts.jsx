import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
  return(
    <section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
      {CORE_CONCEPTS.map((contentList) => (
        <CoreConcept key={contentList.title} {...contentList} />
      ))}
      {/* <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
        // 두개의 방식이 있다. 스프레드 연산자를 이용해서 코드를 더 짧게 작성할 수 있다.
      /> */}
      {/* <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    </ul>
  </section>
  )
}