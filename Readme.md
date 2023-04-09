# Blogger

# testing

## What sh be tested
- component rendering
- Events ex: click events
- props and states
- Inclusion of JSX codes x: you might teste whether a `text` is specific page, or whether a `div`
- Redux stores if you have it.


## tools to test
- Jest[link](https://jestjs.io/) and enzymes[link](https://
- Alternatively you can use 'react testing library'

## Example

testing prop and it's value [link](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/prop.html)
```
 const wrapper = mount(<MyComponent foo={10} />);
expect(wrapper.prop('foo')).to.equal(10); 
```

# Final topic [Redux](https://learn.udacity.com/nanodegrees/nd019-ent/parts/41181c9b-7f87-4ccc-ae52-a466fcc4ec58/lessons/d5b8e3ef-616e-469d-9900-6f3881cc6c84/concepts/2406918c-a051-416a-993f-f721d62eaf8e)