import {mount} from "@vue/test-utils";
// import {expect, test} from "vitest";
import Home from "./Home.vue";

const wrapper = mount(Home, {});

it('should render BaseHeadLine', () => {
    expect(wrapper.exists()).toBe(true);
})
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';

// export const restHandler = [
//     rest.get('http://localhost:9001/api/test/all', (req, res, ctx) => {
//         return res(ctx.status(200), ctx.json([]));
//     })
// ]

// const server = setupServer(...restHandler);
// start server before all tests
// beforeAll(() => server.listen({ port: 9001 }));