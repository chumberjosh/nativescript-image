import { EventData } from 'tns-core-modules/data/observable';
import { Img } from '~/nativescript-image';
import { Button } from 'tns-core-modules/ui/button';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';

class ImageData {
    public uri: string;
    public aspectRation: number;
    constructor(uri: string) {
        this.uri = uri;
    }
}

const images: ImageData[] = new Array(
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink1.jpg'),
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/dessert1.jpg'),
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink2.jpg')
);
let currentIndex = 1;

export function onChangeTap(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as Img;
    // imageView.aspectRatio = images[currentIndex].aspectRation;
    imageView.src = images[currentIndex].uri;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}