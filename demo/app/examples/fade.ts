import { EventData } from 'tns-core-modules/data/observable';
import { Button } from 'tns-core-modules/ui/button';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import * as imageModel from 'nativescript-image';

export function onSetTap(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as StackLayout;
    const imageDrawee = gridLayout.getViewById('imageDrawee') as imageModel.Image;
    // Fade only executes the first time the image is loaded. Cached images will not fade in - https://github.com/facebook/image/issues/2138
    const imageUri = 'https://raw.githubusercontent.com/NativeScript/nativescript-image/master/examples-data/drink1.jpg';
    const imagePipeLine = imageModel.getImagePipeline();
    imagePipeLine.evictFromCache(imageUri);
    imageDrawee.imageUri = imageDrawee.imageUri ? '' : imageUri;
}