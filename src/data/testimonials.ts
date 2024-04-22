import { images } from "@/utils/images";

export interface TestimonialItem {
  username: string;
  testimonial: string;
  imageProfile: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    username: "Sarah L",
    testimonial: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    imageProfile: images.UserTestimonial01,
  },
  {
    username: "Jason M",
    testimonial: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    imageProfile: images.UserTestimonial02
  },
  {
    username: "Emily R",
    testimonial: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    imageProfile: images.UserTestimonial03,
  },
  {
    username: "Michael K",
    testimonial: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    imageProfile: images.UserTestimonial04,
  },
]