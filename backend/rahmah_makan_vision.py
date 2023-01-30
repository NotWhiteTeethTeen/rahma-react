import cv2
import cvlib

def get_objects_num_with_labels():
    """
    Function that returns:-
    objects_num: number of objects in the camera image
    labels: list of object names detected in image
    img: captured image
    bnd_box: bounding box of each object in the image
    cnfdnce: confidence of the prediction for each object detected range = [0.0, 1.0]
    
    """
    # 0 for main camera
    cam  = cv2.VideoCapture(0)
    # getting the img and an error status called frame
    frame, img = cam.read()
    while not frame: # if any error reading try reading again until read with no error
        frame, img = cam.read()
    # getting the objects in the image recognized, using yolov4
    bnd_box, labels, cnfdce = cvlib.detect_common_objects(img, confidence=0.25, model='yolov4')

    objects_num = len(labels)
    # correcting the color of the image
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # this is similiar to closing files
    cam.release()
    return objects_num, labels, img, bnd_box, cnfdce