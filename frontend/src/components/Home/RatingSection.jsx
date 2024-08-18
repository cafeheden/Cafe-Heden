import React from "react";
import { motion } from "framer-motion";

// Importing Icons
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      staggerChildren: 0.2, // Delay between the start of each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const RatingsSection = () => {
  return (
    <section className="ratings-section py-16 px-8 md:px-24 md:py-32 bg-tertiaryColor text-secondaryColor">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          We Love Our Guests, They Love Us Too
        </h2>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex items-center space-x-4 p-10 bg-white shadow-lg rounded-md"
          variants={itemVariants}
        >
          <div className="flex items-center">
            {/* Google Logo */}
            <div className="">
              <FaGoogle size={48} />
            </div>
          </div>
          <div>
            {/* Google Rating Text */}
            <p className="text-sm text-gray-600 font-medium mb-2">
              Google Rating
            </p>
            <div className="flex items-center">
              {/* Rating Value */}
              <span className="text-2xl font-bold text-secondaryColor">
                4.5
              </span>
              {/* Stars */}
              <div className="flex items-center ml-2">
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                  <path
                    fill="gray"
                    d="M12 15.397l-4.08 2.477.78-4.302-3.28-3.167 4.32-.594L12 6.287l1.82 3.524 4.32.594-3.28 3.167.78 4.302L12 15.397z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center space-x-4 p-10 bg-white shadow-lg rounded-md"
          variants={itemVariants}
        >
          <div className="flex items-center">
            {/* Facebook Logo */}
            <div className="">
              <FaFacebook size={48} />
            </div>
          </div>
          <div>
            {/* Google Rating Text */}
            <p className="text-sm text-gray-600 font-medium mb-2">
              Google Rating
            </p>
            <div className="flex items-center">
              {/* Rating Value */}
              <span className="text-2xl font-bold text-secondaryColor">
                4.8
              </span>
              {/* Stars */}
              <div className="flex items-center ml-2">
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                  <path
                    fill="gray"
                    d="M12 15.397l-4.08 2.477.78-4.302-3.28-3.167 4.32-.594L12 6.287l1.82 3.524 4.32.594-3.28 3.167.78 4.302L12 15.397z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center space-x-4 p-10 bg-white shadow-lg rounded-md"
          variants={itemVariants}
        >
          <div className="flex items-center">
            {/* Review Logo */}
            <div className="">
              <MdReviews size={48} />
            </div>
          </div>
          <div>
            {/* Google Rating Text */}
            <p className="text-sm text-gray-600 font-medium mb-2">
              Google Rating
            </p>
            <div className="flex items-center">
              {/* Rating Value */}
              <span className="text-2xl font-bold text-secondaryColor">
                4.5
              </span>
              {/* Stars */}
              <div className="flex items-center ml-2">
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                </svg>
                <svg
                  className="w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.849 1.486 8.193L12 18.896l-7.422 4.452L6.064 15.16.001 9.31l8.332-1.155z" />
                  <path
                    fill="gray"
                    d="M12 15.397l-4.08 2.477.78-4.302-3.28-3.167 4.32-.594L12 6.287l1.82 3.524 4.32.594-3.28 3.167.78 4.302L12 15.397z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RatingsSection;
