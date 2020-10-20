## Reactors

Reactors are elements that react to the current audio and apply those changes to your displays and effects.
A reactor will always output a value between 0 and 1. So if a reactor outputs 0.5 and you apply it to an **opacity**
input, then the element will be 50% visible. The element's input will dynamically change as long as the reactor is active.

To enable a reactor, click on the lightning bolt icon next to a an input that allows reactions.
This will bring up the **reactor panel** below the audio player.

<img class="img-fluid" src="/images/docs/reactors.jpg" />

To reactor elements shown above are:

### 1. Reactor

Once a reactor is enabled for an input, the input will change from a static input field to a bar that updates
dynamically. Clicking on the **X** icon next to the bar will remove the reactor.

### 2. Reactor panel

This is where you control your reactions to the audio. You can adjust several properties of the reactor.

- Output Mode:
  - Subtract: Starts at **1** and values are subtracted
  - Add: Starts at **0** and values are added
  - Reverse: Values go from **1** to **0**. Once **0** is reached it resets back to **1**.
  - Forward: Values go from **0** to **1**. Once **1** is reached it resets back to **0**.
  - Cycle: Values go back and forth between **0** and **1**.
- Max DB: Controls the intensity of the reactor spectrum
- Smoothing: Controls how fast the reactor spectrum moves

### 3. Reactor spectrum

This is where you control what values get picked up by the reactor. You can move and resize the box inside the spectrum
to get different results. How much of the box get filled is what determines the output value. If it is completely filled, 
it will output **1**, if half filled then **0.5**, etc

### 4. Reactor output

This displays the final output value that will be applied to your control input.

## Multiple reactors

You can create as many reactors as you want, but a reactor can only control one input at a time. Some controls allow you to apply
reactors to multiple inputs such as the **text** display, which lets your control **rotation** and **opacity**.

To switch the **reactor panel** to a different input, simply click on the reactor icon of the input you want to edit.