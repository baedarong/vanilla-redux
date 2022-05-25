# Vallila Redux

learning vallila Redux (not based on React)

# 1.0 vanilla counter

# 1.1 store and reducer

Store는 application의 data를 저장하는 곳이다.
스토어를 생성하는reateStore는 reducer 함수를 요구한다.
reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application의 data가 된다.

```
import { createStore } from "redux";
const counterModifier = (state = 0) => {
  return state;
};
const counterStore = createStore(counterModifier);
```

! 현재 createStore는 redux에서 제공하지 않는 함수이다.

# 1.2 actions

Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument로, reducer와 소통하기 위한 방법
Reducer에게 Action을 보내는 방법 : store.dispatch({key: value, key: value ....});

# 1.3 subscriptions

Subscribe : store 안에 있는 변화 감지
store.subscribe(func); // store안의 변화를 감지하면 func 실행

# 1 RECAP

✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)으로, return하는 것은 application의 state가 됨
✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
✅ dispatch : reducer에게 action을 보내는 방법
✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
