---
title: "How to solve a Rubik's cube?"
date: "2022-07-10"
category: "Other"
description: "Recently I was challenged with the fact that I could not solve a Rubik's Cube. I tried to change that and decided to learn how to solve one and in this tutorial I'll explain how to solve one."
---

Recently I was challenged with the fact that I could not solve a Rubik's Cube. I tried to change that and decided to learn how to solve one and in this tutorial I'll explain how to solve one.

## Tutorial

To follow this tutorial the only thing you need is a Rubik's Cube. This tutorial consists of several steps that lead to a solved cube.
In this tutorial we are going to perform several algorithms.

![Solved cube](/images/rubiks/7.svg)

We will use the above image for illustration. The cube as multiple sides: **Front (F), Up (U), Left (L), Right (R) and Down (D)**. The orange surface in the images is considered the Front. Default rotations are clockwise and counterclockwise rotations of a side are marked with and apostrophe (') after the letter.

### 1. White cross

The first step is to make a white cross on the Up layer. And make sure the sides are matching as well!

![Cube for illustration with a white cross but a not matching side](/images/rubiks/furu.png)

In the illustration above both of the sides are matching but the green edge is still flipped. We can solve this with the following algorithm: **F U' R U**.

### 2. White corners

The second step is to arrange the white corners.

![Cube for illustration on how to perform RDRD algorithm](/images/rubiks/rdrd.svg)

Twist the bottom layer so that that the white corner is directly under the spot where it has to go as in the image above. Now we just have to perform one simple algorithm: **R' D' R D**. Don't worry if all colors of the corner aren't in the right spot. Just perform this algorithm a few times in a row.

### 3. Second layer

The third step is to finish the second layer. Now we will first flip the cube so that the white surface is now our bottom layer.

![Cube for illustration on how to perform ULULUFUF algorithm](/images/rubiks/ululufuf.svg)

Twist the Up layer so that the edge piece is matching the color of the Front layer. To put this piece in the left middle front place as in the illustration above you have to use an algorithm that's a little more difficult this time: **U' L' U L U F U' F'**. If you wanted this piece on the right middle front place you have to use a similar algorithm: **U R U' R' U' F' U F**. If a piece is in the right place but the color are flipped then just do the algorithm twice.

### 4. Yellow cross

The fourth step is to make a yellow cross at the Up layer. So make sure this layer is your Up layer. We will create the yellow cross in multiple steps as illustrated below.

![Cube for illustration on how to perform FRURUF algorithm](/images/rubiks/fruruf.png)

The algorithm to make this yellow cross is as follows: **F R U R' U' F'**.

### 5. Yellow edges

The fifth step is to line up the edges correctly. Try to line up as many edges pieces with the right colors as possible.

![Cube for illustration on how to perform RURURU2RU algorithm](/images/rubiks/rururu2ru.svg)

If you want to flip two edges (Up Front and Up Left) pieces you have to perform the following algorithm: **R U R U R U2 R U**. The 2 after the third U in this algorithm means that you have to flip the Up layer twice instead of once.

### 6. Yellow corners on place

The sixth step is to put the yellow corners in the correct spot. We don't have to worry yet about the right orientation. We will do that in the last step.

![Cube for illustration on how to perform URULURUL algorithm](/images/rubiks/urulurul.svg)

If you have a corner piece that is in the right spot twist your cube so that this piece is in the top right corner as above.
To put the corner pieces in the correct place perform the following algorithm: **U R U' L' U R' U' L**. Sometimes you have to do this algorithm another time.

### 7. Finish the cube

The final step is to orient the yellow corner pieces. Twist the cube so that the corner you want to orient is in the top right spot. You can now perform an algorithm that we saw earlier: **R' D' R D**. You may have to do this multiple times in a row. When you finished the first top right corner keep the current front layer and only twist the Up layer clockwise to bring a another corner piece to the top right corner that you want to orient.

![Solved cube](/images/rubiks/7.svg)

---

Sources:

- [https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/](https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/)
