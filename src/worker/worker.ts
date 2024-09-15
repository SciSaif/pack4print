/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

import { packBoxes as pack, PackBoxesProps } from "../pages/pack/packUtils";

export const packBoxes = async ({
    images,
    container,
    options,
}: PackBoxesProps) => {
    return await pack({ images, container, options });
};