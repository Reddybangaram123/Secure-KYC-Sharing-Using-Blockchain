import React, { useState } from "react";
import { Copy, Upload, X } from "lucide-react";


type FileType = {
  name: string;
  size: string;
  lastModified: string;
  isEditing: boolean;
};

type LinkType = {
  url: string;
  lastModified: string;
  isEditing: boolean;
};

export default function UploadPlatform() {
  const [platformLink, setPlatformLink] = useState("c5000ff5-e2cc-4fc1-8b3f-5f786293259f");
  const [readingMaterials, setReadingMaterials] = useState<FileType[]>([]);
  const [assignments, setAssignments] = useState<FileType[]>([]);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["Select","Reading Materials", "Links", "Assignments"];
  // Helper function to copy platform link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(platformLink);
    alert("Copied to clipboard!");
  };

  // Event handlers (keep all your existing handlers here)
  const handleReadingMaterialUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);

    const fileList = files.map((file: File) => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      lastModified: new Date(file.lastModified).toLocaleDateString(),
      isEditing: false,
    }));

    setReadingMaterials([...readingMaterials, ...fileList]);
  };

  const handleAssignmentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return;
      const files = Array.from(event.target.files);
  
      const fileList = files.map((file: File) => ({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        lastModified: new Date(file.lastModified).toLocaleDateString(),
        isEditing: false,
      }));
  
      setAssignments([...assignments, ...fileList]);
    };
  
    // Event handler for deleting a file
    const handleFileDelete = (index: number, state: FileType[], setState: React.Dispatch<React.SetStateAction<FileType[]>>) => {
      setState(state.filter((_, i) => i !== index));
    };
  
    // Event handler for editing a file
    const handleEditClick = (index: number, state: FileType[], setState: React.Dispatch<React.SetStateAction<FileType[]>>) => {
      setState(
        state.map((file, i) =>
          i === index ? { ...file, isEditing: true } : file
        )
      );
    };
  
    // Event handler for changing a file's name
    const handleNameChange = (
      index: number,
      newName: string,
      state: FileType[],
      setState: React.Dispatch<React.SetStateAction<FileType[]>>
    ) => {
      setState(
        state.map((file, i) =>
          i === index ? { ...file, name: newName } : file
        )
      );
    };
  
    // Event handler for blur or enter key press
    const handleBlurOrEnter = (index: number, state: FileType[], setState: React.Dispatch<React.SetStateAction<FileType[]>>) => {
      setState(
        state.map((file, i) =>
          i === index ? { ...file, isEditing: false } : file
        )
      );
    };
  
    // Event handler for uploading links
    const handleLinkUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return;
      const files = Array.from(event.target.files);
  
      const linkList = files.map((file: File) => ({
        url: URL.createObjectURL(file),
        lastModified: new Date(file.lastModified).toLocaleDateString(),
        isEditing: false,
      }));
  
      setLinks([...links, ...linkList]);
    };
  
    // Event handler for deleting a link
    const handleLinkDelete = (index: number) => {
      setLinks(links.filter((_, i) => i !== index));
    };
  
    // Event handler for editing a link
    const handleLinkEditClick = (index: number) => {
      setLinks(
        links.map((link, i) => (i === index ? { ...link, isEditing: true } : link))
      );
    };
  
    // Event handler for changing a link's URL
    const handleLinkChange = (index: number, newUrl: string) => {
      setLinks(
        links.map((link, i) => (i === index ? { ...link, url: newUrl } : link))
      );
    };
  
    // Event handler for blur or enter key press on a link
    const handleLinkBlurOrEnter = (index: number) => {
      setLinks(
        links.map((link, i) => (i === index ? { ...link, isEditing: false } : link))
      );
    };

  return (
    <div className="tw-max-w-4xl tw-mx-auto tw-bg-white tw-shadow-lg tw-rounded-xl tw-p-6 tw-mt-6 tw-font-montserrat">
      <h2 className="tw-text-xl tw-font-semibold tw-text-left">Title</h2>
            <input
              type="text"
              placeholder="Enter Course Name"
              className="tw-w-full tw-mt-2 tw-p-2 tw-border tw-rounded-lg"
            />
      
      <h3 className="tw-mt-4 tw-text-lg tw-font-semibold">Summary <span className="tw-font-light tw-text-sm tw-text-gray-500">(Optional)</span></h3>            <textarea
              rows={3}
              className="tw-w-full tw-mt-2 tw-p-2 tw-border tw-rounded-lg"
              placeholder=""
            ></textarea>
      
            <h3 className="tw-mt-4 tw-text-lg tw-font-semibold">Create Platform Link</h3>
            <div className="tw-bg-gray-100 tw-p-4 tw-rounded-lg tw-shadow-md tw-mt-2">
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                <div>
                  <label className="tw-text-sm tw-font-medium">Github Organization Name</label>
                  <input
                    type="text"
                    placeholder="Enter Github Organization"
                    className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mt-1"
                  />
                </div>
                <div>
                  <label className="tw-text-sm tw-font-medium">Course Name</label>
                  <input
                    type="text"
                    placeholder="Enter Course Name"
                    className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mt-1"
                  />
                </div>
                <div>
                  <label className="tw-text-sm tw-font-medium">Github Assignment Name</label>
                  <input
                    type="text"
                    placeholder="Enter Assignment Name"
                    className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mt-1"
                  />
                </div>
                <div>
                  <label className="tw-text-sm tw-font-medium">Platform Type</label>
                  <select className="tw-w-full tw-border tw-p-2 tw-rounded-lg tw-mt-1">
                    <option>Text</option>
                    <option>Video</option>
                    <option>Quiz</option>
                  </select>
                </div>
              </div>
      
              <div className="tw-mt-4">
                <label className="tw-text-sm tw-font-medium">Platform Link</label>
                <div className="tw-relative">
                  <input
                    type="text"
                    className="tw-w-full tw-border tw-p-2 tw-pr-10 tw-rounded-lg tw-bg-gray-100"
                    value={platformLink}
                    readOnly
                  />
                  <button
                    onClick={copyToClipboard}
                    className="tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2 tw-p-2 tw-rounded-lg tw-bg-gray-200 hover:tw-bg-gray-300">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
      
            {/* Upload Reading Materials */}
            <div className="tw-mt-6">
              <p className="tw-font-semibold">Upload Reading Materials</p>
              <div className="tw-flex tw-items-center tw-gap-4 tw-mt-2">
                <label className="tw-inline-flex tw-items-center tw-gap-2 tw-border tw-border-blue-600 tw-text-blue-600 tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-font-medium hover:tw-bg-blue-50">
                  <Upload size={16} />
                  Choose file
                  <input
                    type="file"
                    multiple
                    accept=".docx,.ppt,.pdf"
                    className="tw-hidden"
                    onChange={handleReadingMaterialUpload}
                  />
                </label>
                <p className="tw-text-gray-500 tw-italic tw-text-sm">
                  Accepted file types: Docx, PPT, and PDFs
                </p>
              </div>
            </div>
      
            <div className="tw-overflow-x-auto tw-mt-6">
              <table className="tw-min-w-full tw-border tw-border-gray-200 tw-border-collapse">
                <thead className="tw-bg-gray-50">
                  <tr>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">S no.</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Name</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Last modified</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Size & format</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody className="tw-bg-white">
                  {readingMaterials.map((file, index) => {
                    // Extract filename and extension
                    const lastDotIndex = file.name.lastIndexOf('.');
                    const fileName = lastDotIndex === -1 ? file.name : file.name.substring(0, lastDotIndex);
                    const fileExtension = lastDotIndex === -1 ? '' : file.name.substring(lastDotIndex);
                    
                    return (
                      <tr key={index}>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{index + 1}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-font-medium tw-text-gray-900 tw-border tw-border-gray-300">
                          {file.isEditing ? (
                            <div className="tw-flex tw-items-center">
                              <input
                                type="text"
                                value={fileName}
                                className="tw-border tw-p-1 tw-rounded"
                                onChange={(e) => {
                                  // Combine new filename with original extension
                                  const newName = e.target.value + fileExtension;
                                  handleNameChange(index, newName, readingMaterials, setReadingMaterials);
                                }}
                                onBlur={() =>
                                  handleBlurOrEnter(index, readingMaterials, setReadingMaterials)
                                }
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  handleBlurOrEnter(index, readingMaterials, setReadingMaterials)
                                }
                                autoFocus
                              />
                              <span className="tw-ml-1">{fileExtension}</span>
                            </div>
                          ) : (
                            file.name
                          )}
                        </td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{file.lastModified}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{file.size}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-flex tw-space-x-2 tw-border tw-border-gray-300">
                          <button
                            className="tw-text-blue-500 hover:tw-text-blue-700"
                            onClick={() =>
                              handleEditClick(index, readingMaterials, setReadingMaterials)
                            }
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </button>
                          <button
                            className="tw-text-red-500 hover:tw-text-red-700"
                            onClick={() =>
                              handleFileDelete(index, readingMaterials, setReadingMaterials)
                            }
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <path d="m10 11 4 4" />
                              <path d="m14 11-4 4" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
      
            {/* Add Links Section */}
            <div className="tw-mt-6">
              <p className="tw-font-semibold">Add Links</p>
              <div className="tw-flex tw-items-center tw-gap-4 tw-mt-2">
                <label className="tw-inline-flex tw-items-center tw-gap-2 tw-border tw-border-blue-600 tw-text-blue-600 tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-font-medium hover:tw-bg-blue-50">
                  <Upload size={16} />
                  Choose file
                  <input
                    type="file"
                    className="tw-hidden"
                    onChange={handleLinkUpload}
                  />
                </label>
                <p className="tw-text-gray-500 tw-italic tw-text-sm">
                  Accepted link from: Web source and YouTube
                </p>
              </div>
            </div>
      
            <div className="tw-overflow-x-auto tw-mt-6">
              <table className="tw-min-w-full tw-border tw-border-gray-200 tw-border-collapse">
                <thead className="tw-bg-gray-50">
                  <tr>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">S no.</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Links</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Last modified</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody className="tw-bg-white">
                  {links.map((link, index) => {
                    // Extract the domain and path parts of the URL
                    const urlObj = new URL(link.url);
                    const domain = urlObj.hostname;
                    const path = urlObj.pathname + urlObj.search + urlObj.hash;
                    
                    return (
                      <tr key={index}>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{index + 1}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-font-medium tw-text-gray-900 tw-border tw-border-gray-300">
                          {link.isEditing ? (
                            <div className="tw-flex tw-items-center tw-gap-1">
                              <span className="tw-text-gray-500">https://</span>
                              <input
                                type="text"
                                value={domain}
                                className="tw-border tw-p-1 tw-rounded tw-flex-1"
                                onChange={(e) => {
                                  const newUrl = `https://${e.target.value}${path}`;
                                  handleLinkChange(index, newUrl);
                                }}
                                onBlur={() => handleLinkBlurOrEnter(index)}
                                onKeyDown={(e) => e.key === "Enter" && handleLinkBlurOrEnter(index)}
                                autoFocus
                              />
                              <span className="tw-text-gray-500">{path}</span>
                            </div>
                          ) : (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="tw-text-blue-600 hover:tw-underline">
                              {link.url}
                            </a>
                          )}
                        </td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{link.lastModified}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-flex tw-space-x-2 tw-border tw-border-gray-300">
                          <button
                            className="tw-text-blue-500 hover:tw-text-blue-700"
                            onClick={() => handleLinkEditClick(index)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </button>
                          <button
                            className="tw-text-red-500 hover:tw-text-red-700"
                            onClick={() => handleLinkDelete(index)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <path d="m10 11 4 4" />
                              <path d="m14 11-4 4" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
      
            {/* Add Assignments Section */}
            <div className="tw-mt-6">
              <p className="tw-font-semibold">Add Assignments</p>
              <div className="tw-flex tw-items-center tw-gap-4 tw-mt-2">
                <label className="tw-inline-flex tw-items-center tw-gap-2 tw-border tw-border-blue-600 tw-text-blue-600 tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer tw-font-medium hover:tw-bg-blue-50">
                  <Upload size={16} />
                  Choose file
                  <input
                    type="file"
                    multiple
                    accept=".docx,.ppt,.pdf"
                    className="tw-hidden"
                    onChange={handleAssignmentUpload}
                  />
                </label>
                <p className="tw-text-gray-500 tw-italic tw-text-sm">
                  Accepted file types: Docx, PPT, and PDFs
                </p>
              </div>
            </div>
      
            <div className="tw-overflow-x-auto tw-mt-6">
              <table className="tw-min-w-full tw-border tw-border-gray-200 tw-border-collapse">
                <thead className="tw-bg-gray-50">
                  <tr>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">S no.</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Name</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Last modified</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Size & format</th>
                    <th className="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider tw-border tw-border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody className="tw-bg-white">
                  {assignments.map((file, index) => {
                    // Extract filename and extension
                    const lastDotIndex = file.name.lastIndexOf('.');
                    const fileName = lastDotIndex === -1 ? file.name : file.name.substring(0, lastDotIndex);
                    const fileExtension = lastDotIndex === -1 ? '' : file.name.substring(lastDotIndex);
                    
                    return (
                      <tr key={index}>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{index + 1}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-font-medium tw-text-gray-900 tw-border tw-border-gray-300">
                          {file.isEditing ? (
                            <div className="tw-flex tw-items-center">
                              <input
                                type="text"
                                value={fileName}
                                className="tw-border tw-p-1 tw-rounded"
                                onChange={(e) => {
                                  // Combine new filename with original extension
                                  const newName = e.target.value + fileExtension;
                                  handleNameChange(index, newName, assignments, setAssignments);
                                }}
                                onBlur={() =>
                                  handleBlurOrEnter(index, assignments, setAssignments)
                                }
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  handleBlurOrEnter(index, assignments, setAssignments)
                                }
                                autoFocus
                              />
                              <span className="tw-ml-1">{fileExtension}</span>
                            </div>
                          ) : (
                            file.name
                          )}
                        </td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{file.lastModified}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-border tw-border-gray-300">{file.size}</td>
                        <td className="tw-px-4 tw-py-4 tw-text-sm tw-text-gray-500 tw-flex tw-space-x-2 tw-border tw-border-gray-300">
                          <button
                            className="tw-text-blue-500 hover:tw-text-blue-700"
                            onClick={() =>
                              handleEditClick(index, assignments, setAssignments)
                            }
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </button>
                          <button
                            className="tw-text-red-500 hover:tw-text-red-700"
                            onClick={() =>
                              handleFileDelete(index, assignments, setAssignments)
                            }
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <path d="m10 11 4 4" />
                              <path d="m14 11-4 4" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
      
            <div className="tw-relative tw-my-8"> {/* Adjust tw-my-8 for more/less spacing */}
              <svg 
                width="100%" 
                height="31" 
                viewBox="0 0 884 31" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="tw-block"
              >
                <path d="M0 16H884" stroke="#BDBDBD" stroke-width="0.5"/>
                <circle cx="443.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
                <path d="M437 15.6667H450.333M443.667 9V22.3333" stroke="#8E8E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

      {/* Done Button */}
     
     
      {/* Button to trigger modal */}
      <button 
        onClick={() => setShowModal(true)}
        className="tw-bg-[#1D1F71] tw-text-white tw-px-4 tw-py-2 tw-rounded"
      >
        Done
      </button>

      {/* Modal */}
      {showModal && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-w-[349px] tw-p-5 tw-relative">
            {/* Close Button (X) */}
            <button
              onClick={() => setShowModal(false)}
              className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-400 hover:tw-text-gray-500"
            >
              <X className="tw-w-5 tw-h-5" />
            </button>

            {/* Modal Header */}
            <div className="tw-mb-4">
              <h2 className="tw-text-xl tw-font-semibold">Create Section</h2>
              <p className="tw-text-sm tw-text-gray-600">
                You can create section to upload a different set of documents
              </p>
            </div>

            {/* Dropdown Select */}
            <div className="tw-mb-4">
              <div className="tw-relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="tw-w-full tw-flex tw-justify-between tw-items-center tw-p-3 tw-border tw-border-gray-300 tw-rounded-md hover:tw-bg-gray-50"
                >
                  <span>{selectedOption}</span>
                  <svg
                    className={`tw-w-5 tw-h-5 tw-text-gray-400 tw-transition-transform ${isDropdownOpen ? "tw-rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Options - positioned relative and pushes content down */}
                {isDropdownOpen && (
                  <div className="tw-relative tw-z-10 tw-w-full tw-mt-1 tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-lg">
                    {options.map((option) => (
                      <div
                        key={option}
                        className={`tw-p-3 tw-cursor-pointer hover:tw-bg-gray-100 ${
                          selectedOption === option ? "tw-bg-blue-50 tw-text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setSelectedOption(option);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons - will be pushed down by dropdown options */}
            <div className="tw-flex tw-justify-between tw-mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="tw-bg-white hover:tw-bg-gray-50 tw-text-gray-700 tw-font-medium tw-py-2 tw-px-4 tw-rounded-md tw-border tw-border-gray-300 tw-w-[48%]"
              >
                Back
              </button>
              <button
                onClick={() => {
                  console.log("Selected:", selectedOption);
                  setShowModal(false);
                }}
                className="tw-bg-[#1D1F71] hover:tw-bg-[#1a1c65] tw-text-white tw-font-medium tw-py-2 tw-px-4 tw-rounded-md tw-w-[48%]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
  