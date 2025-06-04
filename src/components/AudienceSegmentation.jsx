export default function AudienceSegmentation() {
  // Event handler functions
  const addRuleGroup = () => {
    // Implementation for adding rule group
    console.log("Add rule group");
  };

  const removeRuleGroup = (element) => {
    // Implementation for removing rule group
    console.log("Remove rule group", element);
  };

  const addRule = (element) => {
    // Implementation for adding rule
    console.log("Add rule", element);
  };

  const removeRule = (element) => {
    // Implementation for removing rule
    console.log("Remove rule", element);
  };

  const previewSegment = () => {
    // Implementation for preview
    console.log("Preview segment");
  };

  const clearRules = () => {
    // Implementation for clearing rules
    console.log("Clear rules");
  };

  const saveSegment = () => {
    // Implementation for saving segment
    console.log("Save segment");
  };

  const loadSegment = (segment) => {
    // Implementation for loading segment
    console.log("Load segment", segment);
  };

  const deleteSegment = (segment) => {
    // Implementation for deleting segment
    console.log("Delete segment", segment);
  };

  const loadTemplate = (template) => {
    // Implementation for loading template
    console.log("Load template", template);
  };

  const closeSaveModal = () => {
    // Implementation for closing modal
    console.log("Close save modal");
  };

  const confirmSaveSegment = () => {
    // Implementation for confirming save
    console.log("Confirm save segment");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <section id="audience-segmentation" className="page-section min-h-screen bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Audience Segmentation</h2>
              <p className="text-gray-600">Create dynamic customer segments with advanced rule builder</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Rule Builder */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Rule Builder</h3>
                    <button 
                      onClick={addRuleGroup} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Add Rule Group
                    </button>
                  </div>

                  {/* Segment Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Segment Name</label>
                    <input 
                      type="text" 
                      id="segmentName" 
                      placeholder="Enter segment name..." 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>

                  {/* Rule Groups Container */}
                  <div id="ruleGroups" className="space-y-4">
                    {/* Initial Rule Group */}
                    <div className="rule-group bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-700">Rule Group 1</span>
                        <button 
                          onClick={() => removeRuleGroup(this)} 
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>

                      <div className="rules-container space-y-3">
                        <div className="rule-item flex items-center space-x-3">
                          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="spend">Total Spend</option>
                            <option value="visits">Total Visits</option>
                            <option value="orders">Total Orders</option>
                            <option value="last_activity">Last Activity</option>
                            <option value="signup_date">Signup Date</option>
                          </select>
                          
                          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value=">">&gt;</option>
                            <option value="<">&lt;</option>
                            <option value="=">=</option>
                            <option value="!=">≠</option>
                            <option value=">=">≥</option>
                            <option value="<=">≤</option>
                          </select>
                          
                          <input 
                            type="text" 
                            placeholder="Value" 
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                          />
                          
                          <button 
                            onClick={() => removeRule(this)} 
                            className="text-red-600 hover:text-red-800 transition-colors duration-200"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => addRule(this)} 
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
                          >
                            + Add Rule
                          </button>
                        </div>
                        
                        <select className="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="AND">AND</option>
                          <option value="OR">OR</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group Operator */}
                  <div className="mt-4 text-center">
                    <select 
                      id="groupOperator" 
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="AND">AND (All groups must match)</option>
                      <option value="OR">OR (Any group can match)</option>
                    </select>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <button 
                      onClick={previewSegment} 
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Preview Audience
                    </button>
                    <div className="flex space-x-3">
                      <button 
                        onClick={clearRules} 
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Clear All
                      </button>
                      <button 
                        onClick={saveSegment} 
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        Save Segment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Panel */}
              <div className="space-y-6">
                {/* Audience Preview */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Preview</h3>
                  <div className="text-center py-8">
                    <div className="text-4xl font-bold text-blue-600 mb-2" id="audienceSize">0</div>
                    <p className="text-gray-600">Estimated audience size</p>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">High Value</span>
                      <span className="font-medium">23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">New Users</span>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </div>

                {/* Saved Segments */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Segments</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">High Value Customers</p>
                        <p className="text-sm text-gray-600">1,247 users</p>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => loadSegment('high-value')} 
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => deleteSegment('high-value')} 
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Inactive Users</p>
                        <p className="text-sm text-gray-600">892 users</p>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => loadSegment('inactive')} 
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => deleteSegment('inactive')} 
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">New Signups</p>
                        <p className="text-sm text-gray-600">456 users</p>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => loadSegment('new-signups')} 
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => deleteSegment('new-signups')} 
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Templates */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => loadTemplate('high-value')} 
                      className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      High Value Customers
                    </button>
                    <button 
                      onClick={() => loadTemplate('inactive')} 
                      className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      Inactive Users (90+ days)
                    </button>
                    <button 
                      onClick={() => loadTemplate('new-users')} 
                      className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      New Users (Last 30 days)
                    </button>
                    <button 
                      onClick={() => loadTemplate('frequent-buyers')} 
                      className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      Frequent Buyers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Segment Modal */}
          <div id="saveModal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" aria-modal="true" aria-hidden="true">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="bg-white rounded-lg max-w-md w-full p-6 transform transition-all duration-300 scale-95 opacity-0" id="saveModalContent">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Save Segment</h3>
                  <button 
                    onClick={closeSaveModal} 
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Segment Name</label>
                  <input 
                    type="text" 
                    id="modalSegmentName" 
                    placeholder="Enter segment name..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                  <textarea 
                    id="segmentDescription" 
                    rows="3" 
                    placeholder="Describe this segment..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={closeSaveModal} 
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmSaveSegment} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Save Segment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}