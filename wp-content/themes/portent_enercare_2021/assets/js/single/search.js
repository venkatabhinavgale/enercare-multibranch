// Select the node that will be observed for mutations
const targetNode = document.getElementById('addsearch-results');

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationList, observer) {
	// Use traditional 'for loops' for IE 11
	for(const mutation of mutationList) {
		for (const node of mutation.addedNodes){
			if(node.id === 'addsearch-nohits') {
				let searchTerm = node.querySelector('p em');
				let addSearchAlertNode = document.getElementById('addsearch-notifications');
				//Clear any existing message
				addSearchAlertNode.textContent = '';
				//Push in status message
				addSearchAlertNode.textContent = `No results found for ${searchTerm.textContent}. Please try different term`;

			}
			if(node.parentElement.id === 'addsearch-rp-paging') {
				//Check for numerical values
				if(node.innerHTML.match(/\d/, 'gm')) {
					console.log('Found a number');
					node.setAttribute('aria-label', `Search Result Page ${node.textContent}`);
					node.innerHTML = `<span class="screen-reader-text">Page</span> ${node.innerHTML}`;
				}

				if(node.textContent.includes('previous')) {
					console.log('Found a previous');
					node.setAttribute('aria-label', 'Previous Search Results Page');
					node.innerHTML = `${node.innerHTML} <span class="screen-reader-text">Page</span>`;
				}

				if(node.textContent.includes('next')) {
					console.log('Found a next');
					node.setAttribute('aria-label', 'Next Search Results Page');
					node.innerHTML = `${node.innerHTML} <span class="screen-reader-text">Page</span>`;
				}
			}
		}
	}
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
