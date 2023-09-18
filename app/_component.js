import { atomFamily } from "jotai/utils";
import { atom, useAtomValue } from "jotai";

const family = atomFamily((value) => {
  return atom(async () => Promise.resolve(value));
});

export default function SampleComponent() {
  const familyAtom = family("abc");
  console.log("ATOM", familyAtom);
  const value = useAtomValue(familyAtom);
  return (
    <>
      <h1>{value}</h1>
    </>
  );
}
