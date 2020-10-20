## Scenes

In any project, there must exist at least one scene. A scene is an element that holds **displays** and **effects**.
You can reorder scenes just as you would individual layers.

The purpose of a scene is to ensure that effects only affect elements contained within the scene.

For example, you can create a scene with an image and apply a **Blur** effect. You can then create another scene
on top and add a **Text** display without any effects. You would get the following result.

<img class="img-fluid" src="/images/docs/scenes.jpg" />

## Blending

You are also able to blend scenes together by changing the **Blending** option in the scene's control.

For example, if you select **Overlay** as the blending option for the scene with the text, you would get
the following result.

<img class="img-fluid" src="/images/docs/scenes-blending.jpg" />

## Masking

You can use one scene to mask another scene below it. When masking, anything that is the color white will show
through and anything that is black will be blocked.

For example, you can use the **Text** scene above as a mask. To do so click on the **Mask** input in the scene's control.
You would get the following result.

<img class="img-fluid" src="/images/docs/scenes-masking.jpg" />